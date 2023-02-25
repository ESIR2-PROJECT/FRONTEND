package fr.esir.vehicules.dbobjects.bornes

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id

@Entity
class Coordonnees (
        @Id
        @GeneratedValue
        val id: Int?=null,

        @Column
        val longitude: Double,
        @Column
        val latitude: Double
)