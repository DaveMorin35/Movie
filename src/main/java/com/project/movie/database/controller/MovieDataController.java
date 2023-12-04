package com.project.movie.database.controller;

import com.project.movie.database.service.MovieDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies")
public class MovieDataController {

    private final MovieDataService movieDataService;

    @Autowired
    public MovieDataController(MovieDataService movieDataService) {
        this.movieDataService = movieDataService;
    }

    @GetMapping
    @ResponseBody
    public String getAllMovies(){
        return movieDataService.getMovieData();
    }
}