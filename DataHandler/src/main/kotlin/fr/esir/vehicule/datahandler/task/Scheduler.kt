package fr.esir.vehicule.datahandler.task

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse

@Component
class Scheduler {

    val logger: Logger = LoggerFactory.getLogger(Scheduler::class.java)

    @Scheduled(fixedRate = 100000000) // en ms
    fun scheduleFixedRateTask() {
    }

    private fun getData(): String {
        val client = HttpClient.newHttpClient()
        val request = HttpRequest.newBuilder()
            .uri(URI.create("https://www.datar.gouv.fr/fr/datasets/r/8d9398ae-3037-48b2-be19-412c24561fbb"))
            .build()
        val response: HttpResponse<String> = client.send(request, HttpResponse.BodyHandlers.ofString())
        if (response.statusCode() != 200) {
            logger.error(response.toString())
            throw RuntimeException("Error while getting data")
        }
        return response.body()
    }
}