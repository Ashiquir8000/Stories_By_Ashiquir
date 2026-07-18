package com.example.advanceopening;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/contact")
    public String receiveContactForm(@RequestBody Map<String, String> formData) {
        String name = formData.get("name");
        String phone = formData.get("phone");
        String email = formData.get("email");
        String message = formData.get("message");
        
        emailService.sendEmail(name, phone, email, message);

        return "Data packet transmitted and emails sent successfully!";
    }
}