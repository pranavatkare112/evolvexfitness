package com.evolvexfitness.backend.repository;

import com.evolvexfitness.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}