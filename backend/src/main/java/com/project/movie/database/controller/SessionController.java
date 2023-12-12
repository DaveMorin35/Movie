package com.project.movie.database.controller;

import com.project.movie.database.model.User;
import com.project.movie.database.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.Optional;

@RestController
public class SessionController {

    private final UserService userService;

    private final AuthenticationProvider authenticationProvider;

    private final JwtEncoder jwtEncoder;

    public SessionController(UserService userService,
                             AuthenticationProvider authenticationProvider,
                             JwtEncoder jwtEncoder) {
        this.userService = userService;
        this.authenticationProvider = authenticationProvider;
        this.jwtEncoder = jwtEncoder;
    }

    @PostMapping("/session")
    Optional<String> postSession(@RequestBody User loginData, @Value("${tokens.algorithm}") MacAlgorithm macAlgorithm) {

        Instant expirationTime = Instant.now().plusSeconds(3600);

        var usernamePasswordAuthentication =
                new UsernamePasswordAuthenticationToken(loginData.getUsername(), loginData.getPassword());

        var authenticatedAuthentication = this.authenticationProvider.authenticate(usernamePasswordAuthentication);

        if (authenticatedAuthentication.isAuthenticated()) {
            var token = this.jwtEncoder.encode(JwtEncoderParameters.from(JwsHeader.with(macAlgorithm).build(),
                    JwtClaimsSet.builder()
                            .subject(authenticatedAuthentication.getName())
                            .expiresAt(expirationTime)
                            .build()));
            return Optional.of(token.getTokenValue());
        }

        return Optional.empty();
    }

    @GetMapping("/profile")
    public String getUserProfile(){
        return "test user";
    }
}