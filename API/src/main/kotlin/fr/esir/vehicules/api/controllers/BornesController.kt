package fr.esir.vehicules.api.controllers;

import fr.esir.vehicules.api.services.BornesService
import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = ["/bornes"], produces = [MediaType.APPLICATION_JSON_VALUE])
class BornesController(
        val bornesService: BornesService
) {
    @GetMapping
    fun getAll(): ResponseEntity<List<Borne>>{
        return ResponseEntity.ok(bornesService.getAll());
    }
}
