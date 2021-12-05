package br.com.dwb.driver.driver.service;

import br.com.dwb.driver.driver.entity.Driver;
import br.com.dwb.driver.driver.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriverService {

    @Autowired
    private DriverRepository driverRepository;

    public Driver save(Driver driver) {
        return driverRepository.save(driver);
    }

    public List<Driver> listDrivers() {
        return driverRepository.findAll();
    }

    public Optional<Driver> listById(Long id) {
        return driverRepository.findById(id);
    }

    public void deleteById(Long id) {
        driverRepository.deleteById(id);
    }
}
