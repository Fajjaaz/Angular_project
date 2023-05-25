package com.example.demo;

import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;

@Service
public class FlightService {

    private final FlightDetailsDAL flightDetailsDAL;

    public FlightService(FlightDetailsDAL flightDetailsDAL) {
        this.flightDetailsDAL = flightDetailsDAL;
    }
    
    public Map<String, Object> getFlightDetail(String flightNumber) throws IOException, ParseException {
        return flightDetailsDAL.getFlightDetails(flightNumber);
    }

    public Map<String, Object> getFlightSeats(String flightNumber) throws IOException, ParseException {
        return flightDetailsDAL.getFlightSeats(flightNumber);
    }

    public Map<String, Object> getFlightLugagge(String flightNumber) throws IOException, ParseException {
        return flightDetailsDAL.getFlightLugagge(flightNumber);
    }

    public Map<String, Object> getFlightCatering(String flightNumber) throws IOException, ParseException {
        return flightDetailsDAL.getFlightCatering(flightNumber);
    }

    public Map<String, Object> getFlightCrew(String flightNumber) throws IOException, ParseException {
        return flightDetailsDAL.getFlightCrew(flightNumber);
    }
}
