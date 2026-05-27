package com.example.backend.controller;

import com.example.backend.entity.Employee;
import com.example.backend.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping
    public Employee saveEmployee(
            @RequestBody Employee employee) {

        return service.saveEmployee(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {

        return service.getAllEmployees();
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(
            @PathVariable String id) {

        service.deleteEmployee(id);

        return "Deleted Successfully";
    }
}