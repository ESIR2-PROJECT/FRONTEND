package fr.esir.vehicules.dbobjects.bornes

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToOne
import java.sql.Date

@Entity
class Borne (
        @Id
        @GeneratedValue
        val id: Int?=null,

        @Column
        val nomEnseigne: String,
        @OneToOne(cascade = [CascadeType.ALL])
        @JoinColumn
        val station: Station,
        @ManyToMany(cascade = [CascadeType.DETACH])
        @JoinTable
        val priseType: Set<Prise>,
        @Column
        val horaires: String,
        @Column
        val miseEnService: Date ?,
        @OneToOne(cascade = [CascadeType.ALL])
        @JoinColumn
        val coordonnees: Coordonnees,
        @ManyToOne(cascade = [CascadeType.ALL])
        @JoinColumn
        val ville: Ville
)