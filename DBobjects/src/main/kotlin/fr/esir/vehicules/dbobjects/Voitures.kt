package fr.esir.vehicules.dbobjects.voitures

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import java.sql.Date

@Entity
class Voiture (
    
    @Id
    @GeneratedValue
    val id: Int? = null, @Column
    val codgeo: Int,
    
    @Column
    val libgeo: String,
    
    @Column
    val epci: Int,
    
    @Column
    val libepci: String,
    
    @Column
    val dateArrete: Date,
    
    @Column
    val nbVpRechargeablesEl: Int,
    
    @Column
    val nbVpRechargeablesGaz: Int,
    
    @Column
    val nbVp: Int
)