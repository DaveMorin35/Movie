package com.project.movie.database.controller;

import com.project.movie.database.model.User;
import com.project.movie.database.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
public class UserController {

    private final UserService userServices;

    public UserController(UserService userService) {
        this.userServices = userService;
    }

    @GetMapping("user")
    public Collection<User> getUsers(){
        return this.userServices.getAllUsers();
    }

    @PostMapping("user")
    public User postUsers(@RequestBody User newUser){
        System.out.println(newUser);
        return this.userServices.createUser(newUser);
    }

    @PostMapping("login")
    public Boolean loginUsers(@RequestBody User name){
        return this.userServices.validateLogin(name );
    }
}
