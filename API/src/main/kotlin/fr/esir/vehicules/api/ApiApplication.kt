package fr.esir.vehicules.api

import fr.esir.vehicules.api.repos.BornesRepository
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@SpringBootApplication
@EntityScan(basePackages = ["fr.esir.vehicules.dbobjects.bornes"])
class ApiApplication() {

}

fun main(args: Array<String>) {
	runApplication<ApiApplication>(*args)
}
