package fr.esir.vehicules.api.objects

import fr.esir.vehicules.dbobjects.bornes.Borne

class Point (
        val id: Int?=null,
        val longitude: Double,
        val latitude: Double
)