package com.example.demo;

import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Qualifier;

import java.io.IOException;
import java.util.Map;

@Service
public class FlightServicePostgresql {

    private final FlightDAO flightDAO;
    private final UserDAO userDAO;

    public FlightServicePostgresql( FlightDAO flightDAO, @Qualifier("users-datasource") UserDAO userDAO) {
        this.flightDAO = flightDAO;
        this.userDAO = userDAO;
    }

    public Flight getFlightPostgresql(String flightNumber) {
        return flightDAO.findByFlightNumber(flightNumber);
    }
    
    public Flight addFlightPostgresql(Flight flight) {
        return flightDAO.save(flight);
    }

    public User getUserPostgresql(String username) {
        return userDAO.findByUser(username);
    }
    
    public User addUserPostgresql(User user) {
        return userDAO.save(user);
    }
}
