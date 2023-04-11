package fr.esir.vehicules.api.objects

import java.sql.Date

class VoitureAllPoint(
    val codepostal: String,
    val total: Int,
    val electric: Int,
    val gaz: Int,
    val date: Date
) {
}