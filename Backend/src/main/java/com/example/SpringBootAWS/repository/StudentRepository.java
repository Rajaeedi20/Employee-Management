package com.example.SpringBootAWS.repository;

import com.example.SpringBootAWS.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, String> {
}