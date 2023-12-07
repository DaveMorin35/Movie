package com.project.movie.database.service;

import com.project.movie.database.model.User;
import com.project.movie.database.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public abstract class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Collection<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    public User createUser(User newUser) {
        return this.userRepository.save(newUser);
    }

    public User findUser(User user) {
        return this.userRepository.findByUsername(user.getUsername());
    }

    public boolean validateLogin(User user){
      var userData = this.userRepository.findByUsername(user.getUsername());
      return user.getPassword().equals(userData.getPassword());
    }

    public abstract User createNewUser(User user);
}
