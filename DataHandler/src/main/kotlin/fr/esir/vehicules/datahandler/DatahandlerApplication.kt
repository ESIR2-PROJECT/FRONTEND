package fr.esir.vehicules.datahandler

import fr.esir.vehicules.datahandler.service.BornesService
import fr.esir.vehicules.datahandler.service.PrisesService
import jakarta.annotation.PostConstruct
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.scheduling.annotation.Scheduled

@SpringBootApplication
@EnableScheduling
@EntityScan(basePackages = ["fr.esir.vehicules.dbobjects.bornes"])
class DatahandlerApplication(
		val prisesService: PrisesService,
		val bornesService: BornesService
) {

	@Value("\${update.on.startup}")
	val updateOnStartup = false

	@PostConstruct
	fun init(){
		prisesService.checkPrises()

		if(updateOnStartup)
			everyDay()
	}

	@Scheduled(cron = "0 0 1 * * *")
	fun everyDay(){
		bornesService.updateBornes()
	}
}

fun main(args: Array<String>) {
	runApplication<DatahandlerApplication>(*args)
}