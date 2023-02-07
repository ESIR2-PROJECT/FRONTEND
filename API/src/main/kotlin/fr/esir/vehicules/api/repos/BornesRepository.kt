package fr.esir.vehicules.api.repos

import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.data.repository.CrudRepository
import java.util.Date

interface BornesRepository : CrudRepository<Borne, Int> {
    fun findByMiseEnServiceIsAfter(date: Date): List<Borne>
}