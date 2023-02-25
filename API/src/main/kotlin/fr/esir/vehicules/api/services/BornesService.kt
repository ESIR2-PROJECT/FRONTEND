package fr.esir.vehicules.api.services

import fr.esir.vehicules.api.repos.BornesRepository
import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatusCode
import org.springframework.stereotype.Service
import org.springframework.web.client.HttpClientErrorException
import java.util.Date

@Service
class BornesService(
     val bornesRepository: BornesRepository
) {
    fun getAll(): List<Borne> {
        return bornesRepository.findAll().toList();
    }
    fun get(id: Int): Borne {
        val res = bornesRepository.findById(id)
        if(res.isEmpty)
            throw HttpClientErrorException(HttpStatus.NOT_FOUND, "borne id not found")
        return res.get()
    }
    fun getAfter(date: Date): List<Borne> {
        return bornesRepository.findByMiseEnServiceIsBefore(date)
    }
}