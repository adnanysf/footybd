package com.footybd.dto;

import lombok.Data;

@Data
public class MatchPredictionRequired {
    private Long matchId;
    private int predictedHomeScore;
    private int predictedAwayScore;
    private double confidence;
}