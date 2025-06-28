package com.footybd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.footybd.entity")
@EnableJpaRepositories(basePackages = "com.footybd.repository")
public class FootyBdApplication {
	public static void main(String[] args) {
		SpringApplication.run(FootyBdApplication.class, args);
	}
}