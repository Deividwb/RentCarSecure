package br.com.dwb.driver.driver.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
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

    @JsonFormat(pattern = "yyyy-MM-dd",shape = JsonFormat.Shape.STRING)
    @Column(name = "rentDate")
    private String rentDate;

    @Column(name = "rentalTime")
    private Date rentalTime;

    @ManyToOne
    @JoinColumn(name = "cars_id")
    private Cars cars;
}
