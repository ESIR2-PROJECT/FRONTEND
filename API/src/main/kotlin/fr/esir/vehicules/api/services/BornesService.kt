package fr.esir.vehicules.api.services

import fr.esir.vehicules.api.objects.BornePoint
import fr.esir.vehicules.api.repos.BornesRepository
import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.client.HttpClientErrorException
import java.util.Date

@Service
class BornesService(
     val bornesRepository: BornesRepository
) {
    fun getAll(postalCode: Boolean): List<BornePoint> {
        if(postalCode)
            return bornesRepository.getAllPostalCode()
        return bornesRepository.getAll()
    }

    fun get(id: Int): Borne {
        val res = bornesRepository.findById(id)
        if(res.isEmpty)
            throw HttpClientErrorException(HttpStatus.NOT_FOUND, "borne id not found")
        return res.get()
    }
    fun getAfter(date: Date): List<BornePoint> {
        return bornesRepository.findByMiseEnServiceIsBefore(date)
    }

    fun getByZone(latitudeTop: Double, latitudeBottom: Double, longitudeLeft: Double, longitudeRight: Double, date: Date?): List<BornePoint> {
        if(date == null)
            return bornesRepository.getByZone(latitudeTop, latitudeBottom, longitudeLeft, longitudeRight)
        return bornesRepository.getByZoneDate(latitudeTop, latitudeBottom, longitudeLeft, longitudeRight, date)
    }
}