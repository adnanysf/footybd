package com.footybd.service;

import com.footybd.entity.MatchPrediction;
import com.footybd.repository.MatchPredictionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PredictionService {
    private final MatchPredictionRepository predictionRepository;

    public PredictionService(MatchPredictionRepository predictionRepository) {
        this.predictionRepository = predictionRepository;
    }

    public List<MatchPrediction> getAllPredictions() {
        return predictionRepository.findAll();
    }

    public MatchPrediction getPredictionById(Long id) {
        return predictionRepository.findById(id).orElse(null);
    }

    public MatchPrediction savePrediction(MatchPrediction prediction) {
        return predictionRepository.save(prediction);
    }

    public void deletePrediction(Long id) {
        predictionRepository.deleteById(id);
    }
}