package fr.esir.vehicules.datahandler.repositories

import fr.esir.vehicules.dbobjects.voitures.Voitures
import org.springframework.data.repository.CrudRepository

interface VoituresRepository : CrudRepository<Voitures, Int> {

}