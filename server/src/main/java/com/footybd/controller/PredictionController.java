package com.footybd.controller;

import com.footybd.entity.MatchPrediction;
import com.footybd.service.PredictionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/predictions")
public class PredictionController {
    private final PredictionService predictionService;

    public PredictionController(PredictionService predictionService) {
        this.predictionService = predictionService;
    }

    @GetMapping
    public List<MatchPrediction> getAllPredictions() {
        return predictionService.getAllPredictions();
    }

    @GetMapping("/{id}")
    public MatchPrediction getPredictionById(@PathVariable Long id) {
        return predictionService.getPredictionById(id);
    }

    @PostMapping
    public MatchPrediction createPrediction(@RequestBody MatchPrediction prediction) {
        return predictionService.savePrediction(prediction);
    }

    @DeleteMapping("/{id}")
    public void deletePrediction(@PathVariable Long id) {
        predictionService.deletePrediction(id);
    }
}