package fr.esir.vehicules.datahandler.service

import fr.esir.vehicules.datahandler.repositories.PrisesRepository
import fr.esir.vehicules.dbobjects.bornes.Prise
import org.springframework.stereotype.Service

@Service
class PrisesService (
        val prisesRepository: PrisesRepository
) {

    val prisesList = mapOf(
            "prise_type_ef" to "EF",
            "prise_type_2" to "Type 2",
            "prise_type_combo_ccs" to "Combo CCS",
            "prise_type_chademo" to "Chademo",
            "prise_type_autre" to "Autre",
    )

    fun checkPrises(){
        for((code, name) in prisesList){
            if(!prisesRepository.existsByCode(code)){
                val p = Prise(null, name, code)
                prisesRepository.save(p)
            }
        }
    }
    fun getByCode(code: String): Prise {
        return prisesRepository.findByCode(code)
    }
}