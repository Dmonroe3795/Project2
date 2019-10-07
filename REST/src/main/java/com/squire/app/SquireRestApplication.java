package com.squire.app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.squire.models.StorageProperties;
import com.squire.services.StorageService;

@SpringBootApplication
@EnableJpaRepositories("com.squire.repositories")
@EnableConfigurationProperties(StorageProperties.class)
@ComponentScan("com.squire")
@EntityScan("com.squire.models")
public class SquireRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SquireRestApplication.class, args);
	}
	
	@Bean
    CommandLineRunner init(StorageService storageService) {
        return (args) -> {
            storageService.deleteAll();
            storageService.init();
        };
    }

}
