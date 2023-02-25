package fr.esir.vehicule.datahandler.repositories

import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.data.repository.CrudRepository

interface BornesRepository : CrudRepository<Borne, Int> {

}