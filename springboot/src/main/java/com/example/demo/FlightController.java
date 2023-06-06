package com.example.demo;
import org.json.simple.parser.ParseException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;



@SpringBootApplication
@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@ComponentScan("com.example.demo")
@EnableJdbcRepositories(basePackages = "com.example.demo")
public class FlightController {

	public static void main(String[] args) {
		SpringApplication.run(FlightController.class, args);
	}

  private final FlightService flightService;
  private final FlightServicePostgresql flightService2;

  public FlightController(FlightService flightService, FlightServicePostgresql flightService2) {
    this.flightService = flightService;
    this.flightService2 = flightService2;
  }

  @GetMapping("/flightpostgresql")
  public ResponseEntity<Flight> getFlightByNumber(@RequestParam(value = "flightNumber") String flightNumber) {
      Flight flight = flightService2.getFlightPostgresql(flightNumber);
      if (flight != null) {
          return ResponseEntity.ok(flight);
      } else {
          return ResponseEntity.notFound().build();
      }
  }

  @GetMapping("/userdatabase")
  public ResponseEntity<User> getUser(@RequestParam(value = "user") String username) {
      User user = flightService2.getUserPostgresql(username);
      if (user != null) {
          return ResponseEntity.ok(user);
      } else {
          return ResponseEntity.notFound().build();
      }
  }

  @PostMapping("/userdatabasePOST")
  public ResponseEntity<User> updateUser(@RequestParam(value = "user") String username, @RequestBody User updatedUser) {
      User existingUser = flightService2.getUserPostgresql(username);
      if (existingUser != null) {
          existingUser.setName(updatedUser.getName());
          existingUser.setAddress(updatedUser.getAddress());
          existingUser.setTelephone(updatedUser.getTelephone());
          User savedUser = flightService2.addUserPostgresql(existingUser);
          return ResponseEntity.ok(savedUser);
      } else {
          return ResponseEntity.notFound().build();
      }
  }



  @PostMapping("/flightpostgresqlPOST")
  public ResponseEntity<Flight> addFlight(@RequestBody Flight flight) {
      Flight createdFlight = flightService2.addFlightPostgresql(flight);
      return ResponseEntity.status(HttpStatus.CREATED).body(createdFlight);
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

  @GetMapping("/flightSeats")
  public ResponseEntity<Object> getFlightSeats(@RequestParam(value = "flightNumber") String flightNumber) throws IOException, ParseException {
    Map<String, Object> flightSeats = flightService.getFlightSeats(flightNumber);
    if (flightSeats != null) {
      return ResponseEntity.ok(flightSeats);
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Looks like you typed in an incorrect flight number.");
    }
  }

  @GetMapping("/flightLugagge")
  public ResponseEntity<Object> getFlightLugagge(@RequestParam(value = "flightNumber") String flightNumber) throws IOException, ParseException {
    Map<String, Object> flightLugagge = flightService.getFlightLugagge(flightNumber);
    if (flightLugagge != null) {
      return ResponseEntity.ok(flightLugagge);
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Looks like you typed in an incorrect flight number.");
    }
  }

  @GetMapping("/flightCatering")
  public ResponseEntity<Object> getFlightCatering(@RequestParam(value = "flightNumber") String flightNumber) throws IOException, ParseException {
    Map<String, Object> flightCatering = flightService.getFlightCatering(flightNumber);
    if (flightCatering != null) {
      return ResponseEntity.ok(flightCatering);
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Looks like you typed in an incorrect flight number.");
    }
  }

  @GetMapping("/flightCrew")
  public ResponseEntity<Object> getFlightCrew(@RequestParam(value = "flightNumber") String flightNumber) throws IOException, ParseException {
    Map<String, Object> flightCrew = flightService.getFlightCrew(flightNumber);
    if (flightCrew != null) {
      return ResponseEntity.ok(flightCrew);
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Looks like you typed in an incorrect flight number.");
    }
  }
}

