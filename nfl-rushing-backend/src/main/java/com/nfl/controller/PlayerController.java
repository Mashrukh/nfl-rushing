package com.nfl.controller;

import com.nfl.entity.Player;
import com.nfl.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayerController {

    @Autowired
    private PlayerService service;

    @GetMapping("/players")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Player> findAllPlayers() {
        return service.getPlayers();
    }
}
