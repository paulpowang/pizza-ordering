package com.pizza;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class ServerApplication {

  public static void main(String[] args) {
    System.out.println(org.hibernate.Version.getVersionString());
    SpringApplication.run(ServerApplication.class, args);
  }

}
