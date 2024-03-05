package com.ranjith.britishenglish.service;

import java.security.Principal;

import com.ranjith.britishenglish.dto.request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

}
