package fr.esir.vehicules.api.services

import fr.esir.vehicules.api.objects.VoitureAllPoint
import fr.esir.vehicules.api.objects.VoitureDepartementPoint
import fr.esir.vehicules.api.objects.VoiturePoint
import fr.esir.vehicules.api.repos.VoituresRepository
import org.springframework.stereotype.Service

@Service
class VoituresService(
    private val voituresRepository: VoituresRepository
) {
    fun getAllVille(): List<VoiturePoint>{
        return voituresRepository.getAllVille()
    }
    fun getDepartments(): List<VoitureDepartementPoint>{
        return voituresRepository.getAllDepartements()
    }
    fun getAll(): List<VoitureAllPoint>{
        return voituresRepository.getAll()
    }
}