package fr.esir.vehicules.dbobjects.bornes

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id

@Entity
class Prise (
        @Id
        @GeneratedValue
        val id: Int?,

        @Column
        val name: String,

        @Column
        val code: String
)