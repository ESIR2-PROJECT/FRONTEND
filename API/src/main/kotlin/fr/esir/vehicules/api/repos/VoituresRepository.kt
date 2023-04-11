package fr.esir.vehicules.api.repos

import fr.esir.vehicules.api.objects.VoitureAllPoint
import fr.esir.vehicules.api.objects.VoiturePoint
import fr.esir.vehicules.dbobjects.voitures.Voitures
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository

interface VoituresRepository: CrudRepository<Voitures, Int> {
    @Query("SELECT new fr.esir.vehicules.api.objects.VoiturePoint(V1.codgeo, V2.nbVp, V2.nbVpRechargeablesEl, V2.nbVpRechargeablesGaz) FROM (" +
            "SELECT V.codgeo, MAX(V.dateArrete) AS date FROM Voitures V GROUP BY V.codgeo" +
            ") V1 " +
            "JOIN Voitures V2 ON V1.codgeo = V2.codgeo AND V1.date = V2.dateArrete")
    fun getAllVille(): List<VoiturePoint>
    @Query("SELECT new fr.esir.vehicules.api.objects.VoitureAllPoint(V.codgeo, V.nbVp, V.nbVpRechargeablesEl, V.nbVpRechargeablesGaz, V.dateArrete) FROM Voitures V")
    fun getAll(): List<VoitureAllPoint>
}