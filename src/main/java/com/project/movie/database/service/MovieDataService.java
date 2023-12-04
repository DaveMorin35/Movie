package com.project.movie.database.service;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MovieDataService {
    @Value("${api.key}")
    private String apiKey;
    private static final String url="https://api.themoviedb.org/3/trending/movie/week";

    private final RestTemplate restTemplate;

    public MovieDataService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    public String getApikey() {
        return apiKey;
    }

    public void setApikey(String apikey) {
        this.apiKey = apikey;
    }

    public String getMovieData(){
        String apiUrlWithKey= url + "?api_key=" + apiKey;
        return restTemplate.getForObject(apiUrlWithKey, String.class);
    }
}