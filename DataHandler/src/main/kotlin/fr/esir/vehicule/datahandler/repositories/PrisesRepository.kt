package fr.esir.vehicule.datahandler.repositories

import fr.esir.vehicules.dbobjects.bornes.Prise
import org.springframework.data.repository.CrudRepository

interface PrisesRepository : CrudRepository<Prise, Int> {
    fun findByCode(code: String): Prise
    fun existsByCode(code: String): Boolean
}