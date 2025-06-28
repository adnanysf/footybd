package com.footybd.dto;

import com.footybd.entity.enums.Position;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PlayerDTO {
    private String name;
    private LocalDate birthDate;
    private Position position;
}