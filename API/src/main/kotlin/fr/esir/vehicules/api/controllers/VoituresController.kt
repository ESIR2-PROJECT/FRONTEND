package fr.esir.vehicules.api.controllers

import fr.esir.vehicules.api.services.VoituresService
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(maxAge = 3600, origins = arrayOf("http://localhost:4200"))
@RequestMapping(value = ["/voitures"], produces = [MediaType.APPLICATION_JSON_VALUE])
class VoituresController(
    private val voituresService: VoituresService
) {
    @GetMapping
    fun getAll(): ResponseEntity<List<List<String>>> {
        return ResponseEntity.ok(voituresService.getAll().map { it.toList() })
    }

    @GetMapping("/villes")
    fun getNumbersByVille(): ResponseEntity<List<List<String>>> {
        return ResponseEntity.ok(voituresService.getAllVille().map { it.toList() })
    }
}