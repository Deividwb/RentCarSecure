package br.com.dwb.driver.driver.http.controller;

import br.com.dwb.driver.driver.entity.Driver;
import br.com.dwb.driver.driver.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/drivers")
public class DriverController {

    @Autowired//(Conectar Automatico,gera construtor)
    private DriverService driverService;

   @Autowired
   private ModelMapper modelMapper;

   @PostMapping
   @ResponseStatus(HttpStatus.CREATED)
   public Driver save(@RequestBody Driver driver){
       return driverService.save(driver);
   }

   @GetMapping
   @ResponseStatus(HttpStatus.OK)
   public List<Driver> listAllDrivers(){
       return driverService.listDrivers();
   }

   @GetMapping("/{id}")
   @ResponseStatus(HttpStatus.OK)
   public Driver ListDriverById(@PathVariable("id") Long id){
       return driverService.listById(id)
               .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Driver not found"));
   }

   @PutMapping("/{id}")
   @ResponseStatus(HttpStatus.NO_CONTENT)
   public void upDateDriver(@PathVariable("id") Long id,@RequestBody Driver driver){
      driverService.listById(id)
              .map(driverBase ->{
                 modelMapper.map(driver,driverBase);
                 driverService.save(driverBase);
                 return Void.TYPE;
              }).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Driver not found"));
   }

   @DeleteMapping("/{id}")
   @ResponseStatus(HttpStatus.NO_CONTENT)
   public void deleteDriver(@PathVariable("id") Long id){
      driverService.listById(id)
              .map(driver -> {
                  driverService.deleteById(driver.getId());
                  return Void.TYPE;
              }).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Driver not found"));
   }

   @RequestMapping("/home")
   public String home(){
       return "index";
   }
}
