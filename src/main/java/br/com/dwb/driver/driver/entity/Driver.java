package br.com.dwb.driver.driver.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Driver implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "age",nullable = false)
    private Integer age;

    @Column(name = "city",nullable = false)
    private String city;

    @Column(name = "rentDate")
    private Date rentDate;

    @Column(name = "rentalTime")
    private Date rentalTime;

    @Column(name = "car",nullable = false)
    private String car;
}
