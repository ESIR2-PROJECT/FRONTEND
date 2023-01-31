package fr.esir.vehicules.dbobjects

import org.springframework.beans.factory.InitializingBean
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.core.env.Environment

@SpringBootApplication
class DbobjectsApplication : InitializingBean {

	@Autowired
	lateinit var env: Environment
	override fun afterPropertiesSet() {
		println(env.getProperty("POSTGRES_HOST"))
	}
}

fun main(args: Array<String>) {
	runApplication<DbobjectsApplication>(*args)
}
