package fr.esir.vehicules.api.objects

import java.sql.Date

class BornePoint {
    val id: Int
    val longitude: Double
    val latitude: Double
    val date: Date?
    val codePostal: String ?

    constructor(id: Int,
                longitude: Double,
                latitude: Double,
                date: Date ?=null){
        this.id = id
        this.longitude = longitude
        this.latitude = latitude
        this.date = date
        this.codePostal = null
    }
    constructor(
        id: Int,
        longitude: Double,
        latitude: Double,
        date: Date?,
        codePostal: String?
    ){
      this.id = id
        this.longitude = longitude
        this.latitude = latitude
        this.date = date
        this.codePostal = codePostal
    }
    fun toList(): List<String> {
        var text="null"
        if(date!=null){
            text=date.toString()
        }

        if(codePostal == null)
            return listOf(id.toString(), latitude.toString(), longitude.toString(), text)
        return listOf(id.toString(), latitude.toString(), longitude.toString(), text, codePostal)
    }
}