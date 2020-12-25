package com.nfl.service;

import com.nfl.entity.Player;
import com.nfl.respository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {
    @Autowired
    private PlayerRepository repository;

    public List<Player> getPlayers() {
        return repository.findAll();
    }

}
