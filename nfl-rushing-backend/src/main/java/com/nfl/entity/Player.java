package com.nfl.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "PLAYER")
public class Player {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "team")
    private String team;

    @Column(name = "pos")
    private String pos;

    @Column(name = "att")
    private String att;

    @Column(name = "att_per_g")
    private String attPerG;

    @Column(name = "yds")
    private String yds;

    @Column(name = "average")
    private String average;

    @Column(name = "yds_per_g")
    private String ydsPerG;

    @Column(name = "td")
    private String td;

    @Column(name = "lng")
    private String lng;

    @Column(name = "first_touch")
    private String first;

    @Column(name = "first_percent")
    private String firstPercent;

    @Column(name = "twenty_plus")
    private String twentyPlus;

    @Column(name = "forty_plus")
    private String fortyPlus;

    @Column(name = "fum")
    private String fum;
}
