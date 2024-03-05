package com.ranjith.britishenglish.controller;

import static com.ranjith.britishenglish.utils.MyConstant.AUTH;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ranjith.britishenglish.dto.request.CourseAddRequest;
import com.ranjith.britishenglish.dto.response.CourseAddResponse;
// import com.britishenglishcertificate.gowrishankar.service.QueryDataService;
import com.ranjith.britishenglish.service.impl.CourseAddImpl;

@RestController
@RequestMapping(AUTH)
public class CourseAddController {

    private final CourseAddImpl service;

    public CourseAddController(CourseAddImpl service) {
        this.service = service;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add/couresadd")
    public CourseAddResponse saveEnquiry(@RequestBody CourseAddRequest request) {
        return service.saveQuery(request);
    }

}