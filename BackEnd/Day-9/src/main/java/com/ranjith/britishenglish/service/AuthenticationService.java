package com.ranjith.britishenglish.service;

import java.io.IOException;

import com.ranjith.britishenglish.dto.request.LoginRequest;
import com.ranjith.britishenglish.dto.request.RegisterRequest;
import com.ranjith.britishenglish.dto.response.LoginResponse;
import com.ranjith.britishenglish.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
