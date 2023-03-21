package fr.esir.vehicules.dbobjects.voitures

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import java.sql.Date

@Entity
class Voitures (

    @Id
    @GeneratedValue
    val id: Int?=null,

    @Column
    val codgeo: Int,

    @Column
    val libgeo: String,

    @Column
    val epci: Int,

    @Column
    val libepci: String,

    @Column(name = "date_arrete")
    val dateArrete: Date,

    @Column(name = "nb_vp_rechargeables_el")
    val nbVpRechargeablesEl: Int,

    @Column(name = "nb_vp_rechargeables_gaz")
    val nbVpRechargeablesGaz: Int,

    @Column(name = "nb_vp")
    val nbVp: Int
)