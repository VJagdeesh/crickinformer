package services;

import java.util.List;
import java.util.Map;

import entities.Match;

public interface MatchService {
List<Match> getAllMatches();
List<Match> getLiveMatches();
List<List<String>> getPointTable();
}
