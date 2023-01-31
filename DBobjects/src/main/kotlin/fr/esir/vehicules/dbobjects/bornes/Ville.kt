package fr.esir.vehicules.dbobjects.bornes

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
class Ville (
        @Column
        val commune: String,
        @Column
        val code_postale: String,
        @Id
        @GeneratedValue
        val id: Int?=null,
)