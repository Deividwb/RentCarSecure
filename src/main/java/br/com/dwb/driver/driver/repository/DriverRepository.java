package br.com.dwb.driver.driver.repository;

import br.com.dwb.driver.driver.dtos.DriverDto;
import br.com.dwb.driver.driver.entity.Driver;
import org.apache.catalina.LifecycleState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DriverRepository extends JpaRepository<Driver,Long> {

    @Query(value = "select id,name from driver",nativeQuery = true)
    public List<DriverDto> findByDriverDto();


}
