package fr.esir.vehicules.dbobjects

import org.springframework.beans.factory.InitializingBean
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DbobjectsApplication : InitializingBean {
	override fun afterPropertiesSet() {
		println("hello world!")
	}
}

fun main(args: Array<String>) {
	runApplication<DbobjectsApplication>(*args)
}
