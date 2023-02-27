package fr.esir.vehicules.api.objects

import fr.esir.vehicules.dbobjects.bornes.Borne

class Point (
        val id: Int,
        val longitude: Double,
        val latitude: Double
){
    fun toList(): List<Double> {
        return listOf<Double>(id.toDouble(), latitude, longitude)
    }
}