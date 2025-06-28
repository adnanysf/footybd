package com.footybd.service;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ApiFootballServiceTest {

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private ApiFootballService apiService;

    @Test
    void getTeams_ShouldReturnValidResponse() {
        // Setup mock response
        String mockResponse = "{\"teams\":[]}";
        ResponseEntity<String> responseEntity = new ResponseEntity<>(mockResponse, HttpStatus.OK);

        when(restTemplate.exchange(
                anyString(),
                eq(HttpMethod.GET),
                any(HttpEntity.class),
                eq(String.class)
        )).thenReturn(responseEntity);

        // Execute
        ResponseEntity<String> response = apiService.getTeams();

        // Verify
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        verify(restTemplate, times(1)).exchange(
                startsWith("https://v3.football.api-sports.io/teams"), // Verify URL starts with expected base
                eq(HttpMethod.GET),
                argThat(request -> {
                    HttpHeaders headers = request.getHeaders();
                    return headers.containsKey("x-rapidapi-key") &&
                            headers.containsKey("x-rapidapi-host");
                }),
                eq(String.class)
        );
    }

    @Test
    void getPlayersByTeam_ShouldIncludeTeamIdInParams() {
        // Setup
        ResponseEntity<String> responseEntity = new ResponseEntity<>("{}", HttpStatus.OK);

        when(restTemplate.exchange(
                anyString(),
                eq(HttpMethod.GET),
                any(),
                eq(String.class)
        )).thenReturn(responseEntity);

        // Execute
        apiService.getPlayersByTeam(123);

        // Verify
        verify(restTemplate).exchange(
                argThat(url -> url.toString().contains("team=123")),
                eq(HttpMethod.GET),
                any(),
                eq(String.class)
        );
    }

    @Test
    void whenApiRateLimited_ShouldReturnErrorStatus() {
        // Setup failure
        when(restTemplate.exchange(
                anyString(),
                eq(HttpMethod.GET),
                any(),
                eq(String.class)
        )).thenThrow(new HttpClientErrorException(HttpStatus.TOO_MANY_REQUESTS));

        // Execute & Verify
        ResponseEntity<String> response = apiService.getTeams();
        assertEquals(HttpStatus.TOO_MANY_REQUESTS, response.getStatusCode());
    }

    @Test
    void getTeamForm_ShouldRequestLast5Matches() {
        // Setup
        ResponseEntity<String> responseEntity = new ResponseEntity<>("{}", HttpStatus.OK);

        when(restTemplate.exchange(
                anyString(),
                eq(HttpMethod.GET),
                any(),
                eq(String.class)
        )).thenReturn(responseEntity);

        // Execute
        apiService.getTeamForm(456);

        // Verify
        verify(restTemplate).exchange(
                argThat(url -> {
                    String urlStr = url.toString();
                    return urlStr.contains("last=5") && urlStr.contains("team=456");
                }),
                eq(HttpMethod.GET),
                any(),
                eq(String.class)
        );
    }
}