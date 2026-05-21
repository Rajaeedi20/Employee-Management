package com.example.SpringBootAWS.service;

import com.example.SpringBootAWS.model.Student;
import com.example.SpringBootAWS.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repo;

    public StudentService(StudentRepository repo) {
        this.repo = repo;
    }

    public List<Student> getAll() {
        return repo.findAll();
    }

    public Student save(Student s) {
        return repo.save(s);
    }

    public void delete(String id) {
        repo.deleteById(id);
    }
}