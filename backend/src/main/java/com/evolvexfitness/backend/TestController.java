package com.evolvexfitness.backend;

import com.evolvexfitness.backend.model.User;
import com.evolvexfitness.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public String test() {
        User user = new User();
        user.setName("Pranav");

        userRepository.save(user);

        return "Saved to MongoDB";
    }
}