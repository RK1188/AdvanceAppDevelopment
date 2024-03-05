package com.ranjith.britishenglish.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ranjith.britishenglish.model.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
