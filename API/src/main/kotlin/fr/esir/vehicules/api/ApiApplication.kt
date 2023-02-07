package fr.esir.vehicules.api

import fr.esir.vehicules.api.repos.Bornes
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication
@EntityScan("fr.esir.vehicules.dbobjects.bornes")
class ApiApplication(
		bornes: Bornes
) {

	init {
		println(bornes.count())
	}
}

fun main(args: Array<String>) {
	runApplication<ApiApplication>(*args)
}
