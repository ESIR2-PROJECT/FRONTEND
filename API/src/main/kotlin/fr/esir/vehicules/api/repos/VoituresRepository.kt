package fr.esir.vehicules.api.repos

import fr.esir.vehicules.dbobjects.voitures.Voitures
import org.springframework.data.repository.CrudRepository

interface VoituresRepository : CrudRepository<Voitures, Int> {
}