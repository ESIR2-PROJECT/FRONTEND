package fr.esir.vehicules.api.controllers;
import fr.esir.vehicules.api.objects.Point
import fr.esir.vehicules.api.objects.ResponseAll
import fr.esir.vehicules.api.services.BornesService
import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.data.repository.query.Param
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@CrossOrigin(maxAge = 3600, origins = arrayOf("http://localhost:4200"))
@RequestMapping(value = ["/bornes"], produces = [MediaType.APPLICATION_JSON_VALUE])
class BornesController(
        val bornesService: BornesService
) {
    @GetMapping
    fun getAll(@RequestParam(required = false) date: Date?): ResponseEntity<ResponseAll>{
        val bornes = if(date == null)
            bornesService.getAll().map { e -> Point(e.id, e.coordonnees.longitude, e.coordonnees.latitude) }
        else
            bornesService.getAfter(date).map { e -> Point(e.id, e.coordonnees.longitude, e.coordonnees.latitude) }

        return ResponseEntity.ok(
                ResponseAll(bornes)
        )
    }
    @GetMapping("/{id}")
    fun getAfter(@PathVariable("id") id: Int): ResponseEntity<Borne>{
        return ResponseEntity.ok(bornesService.get(id))
    }

    @GetMapping("/zone")
    fun getByZone(
            @RequestParam latitudeTop: Double,
            @RequestParam latitudeBottom: Double,
            @RequestParam longitudeLeft: Double,
            @RequestParam longitudeRight: Double,
            @RequestParam(required = false) date: Date?): ResponseEntity<List<Borne>>{
        return ResponseEntity.ok(bornesService.getByZone(
                latitudeTop, latitudeBottom, longitudeLeft, longitudeRight, date
        ))
    }
}
