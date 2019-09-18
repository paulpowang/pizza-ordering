package com.pizza.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan(basePackages="com.pizza.models")
public class ServerApplication {

	public static void main(String[] args) {
	  SpringApplication.run(ServerApplication.class, args);
	}

}
