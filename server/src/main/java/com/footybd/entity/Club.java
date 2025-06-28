package com.footybd.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String stadium;

    @Enumerated(EnumType.STRING)
    private Division division;

    @OneToMany(mappedBy = "club", cascade = CascadeType.ALL)
    private List<PlayerClubHistory> players;
}