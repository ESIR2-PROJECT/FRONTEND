package fr.esir.vehicules.api.controllers;
import fr.esir.vehicules.api.services.BornesService
import fr.esir.vehicules.dbobjects.bornes.Borne
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
    fun getAll(@RequestParam(required = false) date: Date?, @RequestParam(required = false) postalcode: Boolean): ResponseEntity<List<List<String>>>{
        val bornes = if(date == null) {
            if(postalcode)
                bornesService.getAll(true)
            else
                bornesService.getAll(false)
        }
        else
            bornesService.getAfter(date)

        return ResponseEntity.ok(
                bornes.map { e -> e.toList() }
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
            @RequestParam(required = false) date: Date?): ResponseEntity<List<List<String>>>{
        return ResponseEntity.ok(
                bornesService.getByZone(
                latitudeTop, latitudeBottom, longitudeLeft, longitudeRight, date
            ).map{e -> e.toList()}
        )
    }
}
