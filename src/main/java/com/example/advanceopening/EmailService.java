package com.example.advanceopening;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    public void sendEmail(String visitorName, String visitorPhone, String visitorEmail, String messagePayload) {

        // রেন্ডারের Environment থেকে আপনার API Key এবং ইমেইল টেনে নেবে
        String apiKey = System.getenv("BREVO_API_KEY");
        String myEmail = System.getenv("MY_PERSONAL_EMAIL"); // Brevo-তে যে মেইল দিয়ে অ্যাকাউন্ট খুলেছেন
        String adminEmail = "2023200000382@seu.edu.bd"; // আপনার ইউনিভার্সিটি মেইল (যেখানে আপনি মেসেজ রিসিভ করবেন)

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("api-key", apiKey);
        headers.set("accept", "application/json");

        // ==========================================
        // ১. আপনার (Admin) কাছে মেইল পাঠানোর কনফিগারেশন
        // ==========================================
        Map<String, Object> adminBody = new HashMap<>();
        adminBody.put("sender", Map.of("name", visitorName, "email", myEmail));
        adminBody.put("to", List.of(Map.of("email", adminEmail, "name", "Ashiquir Rahman Oli")));
        adminBody.put("subject", "New Portfolio Message from " + visitorName);
        adminBody.put("htmlContent", "<h3>You received a new message!</h3>" +
                "<p><b>Name:</b> " + visitorName + "</p>" +
                "<p><b>Phone:</b> " + visitorPhone + "</p>" +
                "<p><b>Email:</b> " + visitorEmail + "</p>" +
                "<p><b>Message:</b><br>" + messagePayload + "</p>");

        HttpEntity<Map<String, Object>> adminRequest = new HttpEntity<>(adminBody, headers);

        // ==========================================
        // ২. ভিজিটরের কাছে অটো-রিপ্লাই পাঠানোর কনফিগারেশন
        // ==========================================
        Map<String, Object> visitorBody = new HashMap<>();
        visitorBody.put("sender", Map.of("name", "MD ASHIQUIR RAHMAN", "email", myEmail));
        visitorBody.put("to", List.of(Map.of("email", visitorEmail, "name", visitorName)));
        visitorBody.put("subject", "Thank you for reaching out!");
        visitorBody.put("htmlContent", "<p>Dear " + visitorName + ",</p>" +
                "<p>Your message has been received successfully. I will get back to you shortly.</p>" +
                "<p>Best Regards,<br>MD ASHIQUIR RAHMAN</p>");

        HttpEntity<Map<String, Object>> visitorRequest = new HttpEntity<>(visitorBody, headers);

        try {
            // পোর্ট 443 (HTTPS) দিয়ে ফায়ারওয়াল বাইপাস করে দুটো মেইলই পাঠানো হচ্ছে
            restTemplate.postForEntity("https://api.brevo.com/v3/smtp/email", adminRequest, String.class);
            restTemplate.postForEntity("https://api.brevo.com/v3/smtp/email", visitorRequest, String.class);
            System.out.println("✅ Both emails sent successfully via API!");
        } catch (Exception e) {
            System.out.println("❌ Failed to send email: " + e.getMessage());
        }
    }
}