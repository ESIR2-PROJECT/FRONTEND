package fr.esir.vehicules.api.repos

import fr.esir.vehicules.api.objects.Point
import fr.esir.vehicules.dbobjects.bornes.Borne
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import java.util.Date

interface BornesRepository : CrudRepository<Borne, Int> {
    @Query(value = "SELECT new fr.esir.vehicules.api.objects.Point(B.id, C.longitude, C.latitude) FROM Borne as B JOIN B.coordonnees as C WHERE B.miseEnService < :date")
    fun findByMiseEnServiceIsBefore(date: Date): List<Point>

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