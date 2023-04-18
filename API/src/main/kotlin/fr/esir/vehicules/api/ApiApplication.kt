package fr.esir.vehicules.api

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication

@SpringBootApplication
@EntityScan(basePackages = ["fr.esir.vehicules.dbobjects"])
class ApiApplication() {

}

fun main(args: Array<String>) {
	runApplication<ApiApplication>(*args)
}
