package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody User user) {

        return ResponseEntity.ok(
                service.register(user)
        );
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody Map<String, String> data) {

        String email = data.get("email");
        String password = data.get("password");

        User user = service.login(email, password);

        if (user != null) {

            return ResponseEntity.ok(user);
        }

        return ResponseEntity
                .badRequest()
                .body(Map.of(
                        "message",
                        "Invalid Credentials"
                ));
    }
}