package fr.esir.vehicule.datahandler

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication

@SpringBootApplication
@EntityScan(basePackages = ["fr.esir.vehicules.dbobjects.bornes"])
class DatahandlerApplication

fun main(args: Array<String>) {
	runApplication<DatahandlerApplication>(*args)
}
