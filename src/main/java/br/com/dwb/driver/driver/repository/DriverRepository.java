package br.com.dwb.driver.driver.repository;

import br.com.dwb.driver.driver.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<Driver,Long> {
}
