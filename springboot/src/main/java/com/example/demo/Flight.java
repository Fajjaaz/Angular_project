package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.relational.core.mapping.Table;

@Table("flights")
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String gate;
    private String departure;
    private String arrival;
    private String seats;
    private String luggage;
    private String catering;
    private String crew;
    private String date;

    public Flight() {}

    public Flight(String gate, String departure, String arrival, String seats, String luggage, String catering, String crew, String date) {
        this.gate = gate;
        this.departure = departure;
        this.arrival = arrival;
        this.seats = seats;
        this.luggage = luggage;
        this.catering = catering;
        this.crew = crew;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGate() {
        return gate;
    }

    public void setGate(String gate) {
        this.gate = gate;
    }

    public String getDepartureTime() {
        return departure;
    }

    public void setDepartureTime(String departure) {
        this.departure = departure;
    }

    public String getArrivalTime() {
        return arrival;
    }

    public void setArrivalTime(String arrival) {
        this.arrival = arrival;
    }

    public String getSeats() {
        return seats;
    }

    public void setSeats(String seats) {
        this.seats = seats;
    }

    public String getLuggage() {
        return luggage;
    }

    public void setLuggage(String luggage) {
        this.luggage = luggage;
    }

    public String getCatering() {
        return catering;
    }

    public void setCatering(String catering) {
        this.catering = catering;
    }

    public String getCrew() {
        return crew;
    }

    public void setCrew(String crew) {
        this.crew = crew;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
