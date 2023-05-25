package com.example.demo;

import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;

@Service
public class FlightServicePostgresql {

    private final FlightDAO flightDAO;

    public FlightServicePostgresql( FlightDAO flightDAO) {
        this.flightDAO = flightDAO;
    }

    public Flight getFlightPostgresql(String flightNumber) {
        return flightDAO.findByFlightNumber(flightNumber);
    }
    
    public Flight addFlightPostgresql(Flight flight) {
        return flightDAO.save(flight);
    }
}
