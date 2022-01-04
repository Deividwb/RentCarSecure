package br.com.dwb.driver.driver.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    //private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @JsonIgnore//aqui funcionou
    @ManyToOne(fetch = FetchType.EAGER)//Eager_Carrega os carros toda vez que abrir tabela Drivers//Lazy_Nao carrego Cars, somente se der um get
    @JoinColumn(name = "cars_id")
    private Cars cars;
}
