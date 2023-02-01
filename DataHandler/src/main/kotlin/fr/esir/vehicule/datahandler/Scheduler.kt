package fr.esir.vehicule.datahandler

import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component

@Component
class Scheduler {
    @Scheduled(fixedRate = 1000) // en ms
    fun scheduleFixedRateTask() {
        println("Bonjour je m'execute toutes les secondes")
    }
}