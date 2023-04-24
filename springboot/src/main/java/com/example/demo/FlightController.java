package com.example.demo;
import org.json.simple.parser.ParseException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

import java.util.Map;
import java.util.HashMap;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class FlightController {

	public static void main(String[] args) {
		SpringApplication.run(FlightController.class, args);
	}

  private final FlightService flightService;

  public FlightController(FlightService flightService) {
    this.flightService = flightService;
  }

  @GetMapping("/flightDetail")
  public ResponseEntity<Object> getFlightDetail(@RequestParam(value = "flightNumber") String flightNumber) throws IOException, ParseException {
    Map<String, Object> flightDetail = flightService.getFlightDetail(flightNumber);
    if (flightDetail != null) {
      return ResponseEntity.ok(flightDetail);
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Looks like you typed in an incorrect flight number.");
    }
  }
}

