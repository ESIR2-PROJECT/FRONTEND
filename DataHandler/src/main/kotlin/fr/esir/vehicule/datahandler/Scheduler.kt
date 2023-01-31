package fr.esir.vehicule.datahandler

import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component

@Component
class Scheduler {
    @Scheduled(fixedRate = 1000)
    fun scheduleFixedRateTask() {
        println("Fixed rate task - " + System.currentTimeMillis() / 1000)
    }
}