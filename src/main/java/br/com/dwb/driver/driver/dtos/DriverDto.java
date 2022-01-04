package br.com.dwb.driver.driver.dtos;
import br.com.dwb.driver.driver.entity.Cars;
import br.com.dwb.driver.driver.entity.Driver;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.io.Serializable;

public class DriverDto implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "age",nullable = false)
    private Integer age;

    @Column(name = "city",nullable = false)
    private String city;


    @JsonIgnore//aqui funcionou
    @ManyToOne(fetch = FetchType.EAGER)//Eager_Carrega os carros toda vez que abrir tabela Drivers//Lazy_Nao carrego Cars, somente se der um get
    @JoinColumn(name = "cars_id")
    private Cars cars;

    public DriverDto() {
        super();
    }

    public DriverDto(Driver obj) {
        this.name = obj.getName();
        this.age = obj.getAge();
        this.city = obj.getCity();
        this.cars = obj.getCars();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Cars getCars() {
        return cars;
    }

    public void setCars(Cars cars) {
        this.cars = cars;
    }
}

