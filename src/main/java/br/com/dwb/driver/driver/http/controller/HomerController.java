package br.com.dwb.driver.driver.http.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/home")
public class HomerController {

    @RequestMapping("/index")
    public String home(){
        return "index";
    }
}
