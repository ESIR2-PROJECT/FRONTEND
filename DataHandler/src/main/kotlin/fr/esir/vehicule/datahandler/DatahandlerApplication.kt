package fr.esir.vehicule.datahandler

import fr.esir.vehicule.datahandler.service.PrisesService
import jakarta.annotation.PostConstruct
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication

@SpringBootApplication
@EntityScan(basePackages = ["fr.esir.vehicules.dbobjects.bornes"])
class DatahandlerApplication(
		val prisesService: PrisesService
) {

	@PostConstruct
	fun init(){
		prisesService.checkPrises()
	}
}

fun main(args: Array<String>) {
	runApplication<DatahandlerApplication>(*args)
}
