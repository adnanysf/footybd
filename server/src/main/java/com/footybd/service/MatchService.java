package com.footybd.service;

import com.footybd.entity.Match;
import java.util.List;

public interface MatchService {
    List<Match> getAllMatches();
    Match getMatchById(Long id);
    Match saveMatch(Match match);
    void deleteMatch(Long id);
}