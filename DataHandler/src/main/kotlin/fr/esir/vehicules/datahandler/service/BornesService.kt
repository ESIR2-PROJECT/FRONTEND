package fr.esir.vehicules.datahandler.service

import fr.esir.vehicules.datahandler.repositories.BornesRepository
import fr.esir.vehicules.dbobjects.bornes.*
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.sql.Date

@Service
class BornesService(
        val dataService: DataService,
        val prisesService: PrisesService,
        val bornesRepository: BornesRepository,
)
{

    @Value("\${url.bornes}")
    val bornesUrl: String = ""
    val delimiter = ','

    val logger = LoggerFactory.getLogger(BornesService::class.java);

    private fun getPriseTypes(csv: Map<String, List<String>>, line: Int): Set<Prise> {
        val list = prisesService.prisesList.keys
        val prises = HashSet<Prise>()

        for(code in list){
            if(csv.getValue(code)[line] == "true")
                prises.add(
                        prisesService.getByCode(code)
                )
        }

        return prises
    }

    fun getBornes(): List<Borne> {
        val csv = dataService.getCsv(bornesUrl, delimiter)
        val size = csv.values.first().size
        val bornes = ArrayList<Borne>(size)

        for (i in 0 until size){

            val station = Station(
                    null,
                    csv.getValue("nom_station")[i],
                    csv.getValue("adresse_station")[i]
            )
            val dateString = csv.getValue("date_mise_en_service")[i]

            val date2005 = Date.valueOf("2000-01-02")
            var miseEnService :Date ?= null
            if(!dateString.isEmpty() ){
                miseEnService = Date.valueOf(dateString)
                 if(miseEnService.before(date2005)){
                    miseEnService = null
                }
            }
            val prises = getPriseTypes(csv, i)

            val coordonnees = Coordonnees(
                    null,
                    csv.getValue("consolidated_longitude")[i].toDouble(),
                    csv.getValue("consolidated_latitude")[i].toDouble()
            )

            val ville = Ville(
                    csv.getValue("consolidated_commune")[i],
                    csv.getValue("consolidated_code_postal")[i],
                    null
            )

            val borne = Borne(
                    null,
                    csv.getValue("nom_enseigne")[i],
                    station,
                    prises,
                    csv.getValue("horaires")[i],
                    miseEnService,
                    coordonnees,
                    ville
                    )

            bornes.add(borne)
        }
        return bornes
    }

    fun updateBornes(){
        logger.info("Starting updating Bornes...")
        val bornes = getBornes()
        logger.info("Putting ${bornes.size} into database")
        bornesRepository.deleteAll()
        bornesRepository.saveAll(bornes)
        logger.info("Bornes done.")
    }

}