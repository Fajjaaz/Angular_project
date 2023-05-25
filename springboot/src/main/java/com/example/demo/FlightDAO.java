package com.example.demo;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightDAO extends CrudRepository<Flight, Long> {

    @Query("SELECT * FROM flights WHERE id = :flightNumber")
    Flight findByFlightNumber(String flightNumber);
}