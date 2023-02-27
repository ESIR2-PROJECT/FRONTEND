package fr.esir.vehicules.api.repos

import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import java.util.Date

interface BornesRepository : CrudRepository<Borne, Int> {
    fun findByMiseEnServiceIsBefore(date: Date): List<Borne>

    @Query(value = "SELECT B " +
            "FROM Borne as B " +
            "JOIN B.coordonnees as C " +
            "WHERE C.latitude BETWEEN :latitudeTop AND :latitudeBottom " +
            "AND C.longitude BETWEEN :longitudeLeft AND :longitudeRight " +
            "")
    fun getByZone(
            @Param("latitudeTop") latitudeTop: Double,
            @Param("latitudeBottom") latitudeBottom: Double,
            @Param("longitudeLeft") longitudeLeft: Double,
            @Param("longitudeRight") longitudeRight: Double,
            ): List<Borne>
    @Query(value = "SELECT B " +
            "FROM Borne as B " +
            "JOIN B.coordonnees as C " +
            "WHERE C.latitude BETWEEN :latitudeTop AND :latitudeBottom " +
            "AND C.longitude BETWEEN :longitudeLeft AND :longitudeRight " +
            "AND B.miseEnService <= :date")
    fun getByZoneDate(
            @Param("latitudeTop") latitudeTop: Double,
            @Param("latitudeBottom") latitudeBottom: Double,
            @Param("longitudeLeft") longitudeLeft: Double,
            @Param("longitudeRight") longitudeRight: Double,
            @Param("date") date: Date
    ): List<Borne>
}