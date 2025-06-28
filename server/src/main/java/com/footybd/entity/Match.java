package com.footybd.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.beans.factory.config.YamlProcessor;

import java.time.LocalDateTime;

@Entity
@Data
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Club homeClub;

    @ManyToOne
    private Club awayClub;

    private LocalDateTime matchDate;
    private Integer homeScore;
    private Integer awayScore;

    @Enumerated(EnumType.STRING)
    private YamlProcessor.MatchStatus status;
}
