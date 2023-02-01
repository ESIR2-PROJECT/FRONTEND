package fr.esir.vehicule.datahandler

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component

@SpringBootApplication
class DatahandlerApplication

fun main(args: Array<String>) {
	runApplication<DatahandlerApplication>(*args)
}