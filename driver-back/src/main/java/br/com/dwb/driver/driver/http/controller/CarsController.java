package br.com.dwb.driver.driver.http.controller;

import br.com.dwb.driver.driver.entity.Cars;
import br.com.dwb.driver.driver.service.CarsService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarsController {

    @Autowired
    private CarsService carsService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cars save(@RequestBody Cars cars){
        return carsService.save(cars);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Cars> listAllCars(){
        return carsService.listCars();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Cars listCarsById(@PathVariable("id") Long id){
        return carsService.listById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Car not found"));
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void upDateCars(@PathVariable("id") Long id,@RequestBody Cars cars){
        carsService.listById(id)
                .map(carBase->{
                    modelMapper.map(cars,carBase);
                    carsService.save(carBase);
                    return Void.TYPE;
                }).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Car not found"));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCarById(@PathVariable("id") Long id){
        carsService.listById(id)
                .map(cars -> {
                    carsService.removeById(cars.getId());
                    return Void.TYPE;
                }).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Car not found"));
    }

}
