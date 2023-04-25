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
}
