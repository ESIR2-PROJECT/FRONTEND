package fr.esir.vehicules.api

import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication
@EntityScan(basePackages = ["fr.esir.vehicules.dbobjects.bornes"])
class ApiApplication() {

}

fun main(args: Array<String>) {
	runApplication<ApiApplication>(*args)
}
