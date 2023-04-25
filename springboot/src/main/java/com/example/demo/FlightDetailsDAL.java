package com.example.demo;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Repository;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

@Repository
public class FlightDetailsDAL {

    public Map<String, Object> getFlightDetails(String flightNumber) throws IOException, ParseException {
        String fileName = "flightdetails.json";
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(fileName);
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));

        JSONParser jsonParser = new JSONParser();
        JSONArray jsonArray = (JSONArray) jsonParser.parse(reader);

        for (Object obj : jsonArray) {
            JSONObject jsonObject = (JSONObject) obj;
            String id = (String) jsonObject.get("id");
            if (id.equals(flightNumber)) {
                Map<String, Object> flightDetail = new HashMap<>();
                flightDetail.put("id", id);
                flightDetail.put("departureTime", jsonObject.get("departure time"));
                flightDetail.put("arrivalTime", jsonObject.get("arrival time"));
                flightDetail.put("gate", jsonObject.get("gate"));
                flightDetail.put("date", jsonObject.get("date"));
                flightDetail.put("seats", jsonObject.get("seats"));
                flightDetail.put("luggage", jsonObject.get("luggage"));
                flightDetail.put("catering", jsonObject.get("catering"));
                flightDetail.put("crew", jsonObject.get("crew"));
                return flightDetail;
            }
        }
        return null;
    }
}
