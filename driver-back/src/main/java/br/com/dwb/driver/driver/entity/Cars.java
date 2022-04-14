package br.com.dwb.driver.driver.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonRawValue;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cars implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "model",nullable = false)
    private String model;

//    @Column(name = "trafficTicket")
//    private String trafficTicket;



    @OneToMany(mappedBy = "cars",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    //@JoinColumn(name = "driver_id")
    private List<Driver> driver = new ArrayList<>();



}
