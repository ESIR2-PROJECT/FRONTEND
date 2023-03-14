package fr.esir.vehicules.datahandler.service

import fr.esir.vehicules.datahandler.repositories.VoituresRepository
import fr.esir.vehicules.dbobjects.voitures.*
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.sql.Date

@Service
class VoituresService(
        val dataService: DataService,
        val marquesService: MarquesService,
        val modelesService: ModelesService,
        val voituresRepository: VoituresRepository,
)
{

    @Value("\${url.voitures}")
    val voituresUrl: String = ""
    val delimiter = ','

    val logger = LoggerFactory.getLogger(VoituresService::class.java);

    private fun getModele(marque: Marque, modeleNom: String): Modele {
        return modelesService.getByMarqueAndNom(marque, modeleNom)
    }

    fun getVoitures(): List<Voiture> {
        val csv = dataService.getCsv(voituresUrl, delimiter)
        val size = csv.values.first().size
        val voitures = ArrayList<Voiture>(size)

        for (i in 0 until size){
            val marqueNom = csv.getValue("marque")[i]
            val modeleNom = csv.getValue("modele")[i]
            val modele = getModele(
                marquesService.getOrCreate(marqueNom),
                modeleNom
            )

            val dateString = csv.getValue("date_mise_circulation")[i]
            if(dateString.isEmpty())
                continue;
            val miseCirculation = Date.valueOf(dateString)

            val voiture = Voiture(
                null,
                csv.getValue("immatriculation")[i],
                modele,
                csv.getValue("couleur")[i],
                csv.getValue("carburant")[i],
                csv.getValue("boite_vitesse")[i],
                miseCirculation
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
