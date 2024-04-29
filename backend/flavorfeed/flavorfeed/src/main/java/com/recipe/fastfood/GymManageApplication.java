package com.recipe.fastfood;

import com.recipe.fastfood.configuration.ApplicationProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(ApplicationProperties.class)
public class GymManageApplication {

	public static void main(String[] args) {
		SpringApplication.run(GymManageApplication.class, args);
	}

}
