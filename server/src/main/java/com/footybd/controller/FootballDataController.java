package com.footybd.controller;

import com.footybd.service.ApiFootballService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/football")
public class FootballDataController {
    private final ApiFootballService apiService;

    public FootballDataController(ApiFootballService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/teams")
    public ResponseEntity<String> getTeams() {
        return apiService.getTeams();
    }

    @GetMapping("/players/{teamId}")
    public ResponseEntity<String> getPlayersByTeam(@PathVariable int teamId) {
        return apiService.getPlayersByTeam(teamId);
    }

    @GetMapping("/form/{teamId}")
    public ResponseEntity<String> getTeamForm(@PathVariable int teamId) {
        return apiService.getTeamForm(teamId);
    }
}