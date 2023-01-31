package fr.esir.vehicules.dbobjects.bornes

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id

@Entity
class Station (
        @Id
        @GeneratedValue
        val id: Int?=null,

        @Column
        val nom: String,
        @Column
        val address: String
)