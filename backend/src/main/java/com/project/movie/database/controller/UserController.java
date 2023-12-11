package com.project.movie.database.controller;

import com.project.movie.database.model.User;
import com.project.movie.database.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public Optional<User> postUsers(@RequestBody User user){
        System.out.println(user);
        return this.userServices.createNewUser(user);
    }

    @PostMapping("login")
    public ResponseEntity<?> loginUsers(@RequestBody User user){
        if ( userServices.validateLogin(user)){
            User userData = userServices.findByUsername(user.getUsername());
            return ResponseEntity.ok(userData);
        }else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
