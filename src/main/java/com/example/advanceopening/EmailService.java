package com.example.advanceopening;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String visitorName, String visitorPhone, String visitorEmail, String messagePayload) {

        SimpleMailMessage adminMessage = new SimpleMailMessage();
        adminMessage.setTo("2023200000382@seu.edu.bd");
        adminMessage.setSubject("New Portfolio Message from " + visitorName);
        adminMessage.setText("You received a new message!\n\nName: " + visitorName +
                "\nPhone: " + visitorPhone +
                "\nEmail: " + visitorEmail +
                "\n\nMessage:\n" + messagePayload);
        mailSender.send(adminMessage);

        SimpleMailMessage visitorMessage = new SimpleMailMessage();
        visitorMessage.setTo(visitorEmail);
        visitorMessage.setSubject("Thank you for reaching out!");
        visitorMessage.setText("Dear " + visitorName + ",\n\nYour message has been received successfully. I will get back to you shortly.\n\nBest Regards,\nMD ASHIQUIR RAHMAN");
        mailSender.send(visitorMessage);
    }
}