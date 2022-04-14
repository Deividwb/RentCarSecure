package br.com.dwb.driver.driver.service;

import br.com.dwb.driver.driver.entity.Cars;
import br.com.dwb.driver.driver.repository.CarsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarsService {

    @Autowired
    private CarsRepository carsRepository;

    public Cars save(Cars cars){
        return carsRepository.save(cars);
    }

    public List<Cars> listCars(){
        return carsRepository.findAll();
    }

    public Optional<Cars> listById(Long id){
        return carsRepository.findById(id);
    }

    public void removeById(Long id){
        carsRepository.deleteById(id);
    }
}
