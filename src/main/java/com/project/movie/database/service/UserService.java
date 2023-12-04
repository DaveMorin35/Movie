package com.project.movie.database.service;

import com.project.movie.database.model.User;

import java.util.Collection;
import java.util.Optional;

public interface userService {
    Collection<User> getAllUsers();

    Optional<User> createUser(User newUser);
}
