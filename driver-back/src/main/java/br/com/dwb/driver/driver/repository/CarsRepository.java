package br.com.dwb.driver.driver.repository;

import br.com.dwb.driver.driver.entity.Cars;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarsRepository extends JpaRepository<Cars,Long> {
}
