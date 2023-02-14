package fr.esir.vehicules.api.controllers;

import fr.esir.vehicules.api.objects.ResponseAll
import fr.esir.vehicules.api.services.BornesService
import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.data.repository.query.Param
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController;
import java.util.*

@RestController
@RequestMapping(value = ["/bornes"], produces = [MediaType.APPLICATION_JSON_VALUE])
class BornesController(
        val bornesService: BornesService
) {
    @GetMapping
    fun getAll(@RequestParam(required = false) date: Date?): ResponseEntity<ResponseAll>{
        val bornes = if(date == null)
            bornesService.getAll()
        else
            bornesService.getAfter(date)

        return ResponseEntity.ok(
                ResponseAll(bornes)
        )
    }
    @GetMapping("/:id")
    fun getAfter(@Param("id") id: Int): ResponseEntity<Borne>{
        return ResponseEntity.ok(bornesService.get(id))
    }
}
