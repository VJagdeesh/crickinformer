package com.crick.apis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "entities")
public class CrickInformerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrickInformerBackendApplication.class, args);
	}

}
