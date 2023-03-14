package fr.esir.vehicules.datahandler.repositories

import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.data.repository.CrudRepository

interface VoituresRepository : CrudRepository<Borne, Int> {

}