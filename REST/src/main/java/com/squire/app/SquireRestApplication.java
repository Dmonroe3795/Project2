package com.squire.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.squire.repositories")
@ComponentScan("com.squire")
@EntityScan("com.squire.models")
public class SquireRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SquireRestApplication.class, args);
	}

}
