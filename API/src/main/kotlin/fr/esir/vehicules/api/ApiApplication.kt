package fr.esir.vehicules.api

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ApiApplication() {
	init {
		println("Hello world")INI
	}
}

fun main(args: Array<String>) {
	runApplication<ApiApplication>(*args)
}
