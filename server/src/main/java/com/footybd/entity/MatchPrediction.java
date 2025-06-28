package com.footybd.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class MatchPrediction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Match match;

    private int predictedHomeScore;
    private int predictedAwayScore;
    private double confidence;
}