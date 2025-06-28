package com.footybd.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.HashMap;
import java.util.Map;

@Service
public class ApiFootballService {
    @Value("${api.football.key}")
    private String apiKey;

    @Value("${api.football.base-url}")
    private String baseUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public ResponseEntity<String> getTeams() {
        return makeApiCall("/teams");
    }

    public ResponseEntity<String> getPlayersByTeam(int teamId) {
        return makeApiCall("/players", Map.of("team", String.valueOf(teamId)));
    }

    public ResponseEntity<String> getTeamForm(int teamId) {
        return makeApiCall("/fixtures", Map.of(
                "team", String.valueOf(teamId),
                "last", "5"
        ));
    }

    private ResponseEntity<String> makeApiCall(String endpoint) {
        return makeApiCall(endpoint, new HashMap<>());
    }

    private ResponseEntity<String> makeApiCall(String endpoint, Map<String, String> params) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("x-rapidapi-key", apiKey);
        headers.set("x-rapidapi-host", "v3.football.api-sports.io");

        UriComponentsBuilder builder = UriComponentsBuilder
                .fromHttpUrl(baseUrl + endpoint);

        params.forEach(builder::queryParam);

        return restTemplate.exchange(
                builder.toUriString(),
                HttpMethod.GET,
                new HttpEntity<>(headers),
                String.class
        );
    }
}