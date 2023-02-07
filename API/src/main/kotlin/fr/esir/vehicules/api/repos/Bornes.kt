package fr.esir.vehicules.api.repos

import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

interface Bornes : CrudRepository<Borne, Int> {
}