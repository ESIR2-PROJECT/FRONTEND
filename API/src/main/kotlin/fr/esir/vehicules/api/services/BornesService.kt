package fr.esir.vehicules.api.services

import fr.esir.vehicules.api.repos.BornesRepository
import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.stereotype.Service

@Service
class BornesService(
     val bornesRepository: BornesRepository
) {
    fun getAll(): List<Borne> {
        return bornesRepository.findAll().toList();
    }
}