package fr.esir.vehicules.datahandler.service

import org.slf4j.LoggerFactory
import fr.esir.vehicules.datahandler.repositories.VoituresRepository
import fr.esir.vehicules.dbobjects.voitures.Voitures
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.sql.Date
import java.util.*
import kotlin.collections.ArrayList


@Service
class VoituresService(
        val dataService: DataService,
        val voituresRepository: VoituresRepository,
)
{

    @Value("\${url.vehicules}")
    val voituresUrl: String = ""
    val delimiter = ';'

    val logger = LoggerFactory.getLogger(VoituresService::class.java);

    fun getVoitures(): List<Voitures> {
        val csv = dataService.getCsv(voituresUrl, delimiter)
        val size = csv.values.first().size
        val voitures = ArrayList<Voitures>(size)

        for (i in 0 until size){
            val nomCommune = csv.getValue("libgeo")[i]
            val epciNumero = csv.getValue("epci")[i].toIntOrNull() ?: 0
            val epciNom = csv.getValue("libepci")[i]
            val nbV_elec = csv.getValue("nb_vp_rechargeables_el")[i].toIntOrNull() ?: 0
            val nbV_gaz = csv.getValue("nb_vp_rechargeables_gaz")[i].toIntOrNull() ?: 0
            val nbV_total = csv.getValue("nb_vp")[i].toIntOrNull() ?: 0
            val dateArrete = csv.getValue("date_arrete")[i]

            if(dateArrete.isEmpty())
                continue;

            val date_finale = Date.valueOf(dateArrete)

            val voiture = Voitures(
            null,
                codePostal,
                nomCommune,
                epciNumero,
                epciNom,
                date_finale,
                nbV_elec,
                nbV_gaz,
                nbV_total

            )

            voitures.add(voiture)
        }
        return voitures
    }

    fun updateVoitures(){
        logger.info("Starting updating Voitures...")
        val voitures = getVoitures()
        logger.info("Putting ${voitures.size} into database")
        voituresRepository.deleteAll()
        voituresRepository.saveAll(voitures)
        logger.info("Voitures done.")
    }

}
