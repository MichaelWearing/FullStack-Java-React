package com.example.server.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student mikey = new Student(
                    1L,
                    "Mikey",
                    "mikeywearing@gmail.com",
                    LocalDate.of(1991, Month.DECEMBER, 27)
            );
            Student ste = new Student(
                    2L,
                    "Ste",
                    "Ste@gmail.com",
                    LocalDate.of(1993, Month.OCTOBER, 29)
            );

            repository.saveAll(
                    List.of(mikey, ste)
            );
        };
    }

    @Bean
    public WebMvcConfigurer corsConfig() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*")
                        .allowedOrigins("*");
            }
        };
    }
}
