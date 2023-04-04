package fr.esir.vehicules.api.objects

import fr.esir.vehicules.dbobjects.bornes.Borne
import java.sql.Date

class Point (
        val id: Int,
        val longitude: Double,
        val latitude: Double,
        val date: Date ?=null
){
    fun toList(): List<String> {
        var text="null"
        if(date!=null){
            text=date.toString()
        }
        return listOf(id.toString(), latitude.toString(), longitude.toString(), text)
    }
}