package com.footybd.repository;

import com.footybd.entity.MatchPrediction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchPredictionRepository extends JpaRepository<MatchPrediction, Long> {
}