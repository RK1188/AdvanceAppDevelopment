package com.ranjith.britishenglish.controller;

import static com.ranjith.britishenglish.utils.MyConstant.AUTH;
import static com.ranjith.britishenglish.utils.MyConstant.LOGIN;
import static com.ranjith.britishenglish.utils.MyConstant.REFRESR_TOKEN;
import static com.ranjith.britishenglish.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ranjith.britishenglish.dto.request.LoginRequest;
import com.ranjith.britishenglish.dto.request.RegisterRequest;
import com.ranjith.britishenglish.dto.response.LoginResponse;
import com.ranjith.britishenglish.dto.response.RegisterResponse;
import com.ranjith.britishenglish.service.AuthenticationService;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@Tag(name = "Authentication")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Registration failed due to an unexpected error.");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
            response = authService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Login failed!");
            response.setAccessToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(REFRESR_TOKEN)
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response) throws IOException {
        authService.refreshToken(request, response);
    }
}
