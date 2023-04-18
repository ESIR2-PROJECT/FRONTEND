package fr.esir.vehicules.api.objects

class VoitureDepartementPoint(
    val departement: String,
    val total: Int,
    val elec: Int,
    val gaz: Int,
) {
    fun toList(): List<String> {
        return listOf(departement, total.toString(), elec.toString(), gaz.toString())
    }
}