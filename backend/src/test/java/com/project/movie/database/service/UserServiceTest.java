package com.project.movie.database.service;

import com.project.movie.database.model.User;
import com.project.movie.database.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;
import static org.mockito.ArgumentMatchers.any;

import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllUsers() {
        when(userRepository.findAll()).thenReturn(Collections.singletonList(new User()));

        var result = userService.getAllUsers();

        assertEquals(1, result.size());
    }

    @Test
    void findByUsername() {
        when(userRepository.findByUsername("testUser")).thenReturn(Optional.of(new User()));

        var result = userService.findByUsername("testUser");

        assertNotNull(result);
    }

    @Test
    void validateLogin() {
        when(userRepository.findByUsername("validateUser")).thenReturn(Optional.of(new User()));

        var result = userService.validateLogin(new User("new User", "password", 1L));
        assertFalse(result);
    }

    @Test
    void createNewUser() {
        when(passwordEncoder.encode(anyString())).thenReturn("hashedPassword");
        when(userRepository.save(any(User.class))).thenReturn(new User());

        var result = userService.createNewUser(new User("new User", "password", 1L));

        assertNotNull(result);
    }

    @Test
    void loadUserByUsername() {
        when(userRepository.findByUsername("existingUser")).thenReturn(Optional.of(new User()));

        var result = userService.loadUserByUsername("existingUser");
        assertNotNull(result);
    }
}