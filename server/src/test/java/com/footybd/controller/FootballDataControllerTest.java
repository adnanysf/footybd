package com.footybd.controller;

import com.footybd.service.ApiFootballService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(FootballDataController.class)
public class FootballDataControllerTest {

    @Autowired
    private MockMvc mockMvc;


    private ApiFootballService apiService;

    @Test
    void getTeams_ShouldReturnApiResponse() throws Exception {
        String mockResponse = "{\"teams\":[{\"id\":1,\"name\":\"Arsenal\"}]}";
        when(apiService.getTeams())
                .thenReturn(ResponseEntity.ok(mockResponse));

        mockMvc.perform(get("/api/football/teams"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.teams[0].name").value("Arsenal"));
    }

    @Test
    void getPlayersByTeam_ShouldReturnPlayers() throws Exception {
        String mockResponse = "{\"players\":[{\"id\":1,\"name\":\"Saka\"}]}";
        when(apiService.getPlayersByTeam(anyInt()))
                .thenReturn(ResponseEntity.ok(mockResponse));

        mockMvc.perform(get("/api/football/players/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.players[0].name").value("Saka"));
    }

    @Test
    void getTeamForm_ShouldReturnLast5Matches() throws Exception {
        String mockResponse = "{\"form\":[\"W\",\"L\",\"D\",\"W\",\"W\"]}";
        when(apiService.getTeamForm(anyInt()))
                .thenReturn(ResponseEntity.ok(mockResponse));

        mockMvc.perform(get("/api/football/form/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.form.length()").value(5));
    }

    @Test
    void whenApiFails_ShouldReturnErrorStatus() throws Exception {
        when(apiService.getTeams())
                .thenReturn(ResponseEntity.status(429).build());

        mockMvc.perform(get("/api/football/teams"))
                .andExpect(status().isTooManyRequests());
    }
}