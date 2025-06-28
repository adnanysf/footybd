package com.footybd.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private LocalDate birthDate;

    @Enumerated(EnumType.STRING)
    private Position position;

    @OneToMany(mappedBy = "player", cascade = CascadeType.ALL)
    private List<PlayerClubHistory> clubHistory;
}
