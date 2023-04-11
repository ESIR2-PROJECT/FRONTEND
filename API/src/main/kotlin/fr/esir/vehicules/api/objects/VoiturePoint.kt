package fr.esir.vehicules.api.objects

class VoiturePoint(
    val codepostal: String,
    val total: Int,
    val electric: Int,
    val gaz: Int
) {
    fun toList(): List<String> {
        return listOf(codepostal, total.toString(), electric.toString(), gaz.toString())
    }
}