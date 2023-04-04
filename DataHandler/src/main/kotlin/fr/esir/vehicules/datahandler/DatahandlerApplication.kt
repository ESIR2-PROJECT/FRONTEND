package fr.esir.vehicules.datahandler

import fr.esir.vehicules.datahandler.service.BornesService
import fr.esir.vehicules.datahandler.service.PrisesService
import jakarta.annotation.PostConstruct
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.scheduling.annotation.Scheduled

import fr.esir.vehicules.datahandler.service.VoituresService

@SpringBootApplication
@EnableScheduling
@EntityScan(basePackages = ["fr.esir.vehicules.dbobjects"])
class DatahandlerApplication(
		val prisesService: PrisesService,
		val bornesService: BornesService,
		val voituresService: VoituresService
) {

	@Value("\${update.on.startup}")
	val updateOnStartup: Boolean? = false

	val logger = LoggerFactory.getLogger(DatahandlerApplication::class.java);

	@PostConstruct
	fun init(){
		logger.info("Update on startup: $updateOnStartup")
		prisesService.checkPrises()

		if(updateOnStartup == true)
			everyDay()

		if(bornesService.isEmpty() || updateOnStartup == false )
			bornesService.updateBornes()
	}

	@Scheduled(cron = "0 0 1 * * *")
	fun everyDay(){
		bornesService.updateBornes()
		voituresService.updateVoitures()
	}
}

fun main(args: Array<String>) {
	runApplication<DatahandlerApplication>(*args)
}
