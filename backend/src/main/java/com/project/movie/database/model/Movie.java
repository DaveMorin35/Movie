package com.project.movie.database.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class Movie {

    @Id
    @GeneratedValue()
    long id;
    String name;
    String year;
}