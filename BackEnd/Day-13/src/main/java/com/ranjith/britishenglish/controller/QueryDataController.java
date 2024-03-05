package com.ranjith.britishenglish.controller;

import static com.ranjith.britishenglish.utils.MyConstant.AUTH;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ranjith.britishenglish.dto.request.QueryDataRequest;
import com.ranjith.britishenglish.dto.response.QueryDataResponse;
// import com.britishenglishcertificate.gowrishankar.service.QueryDataService;
import com.ranjith.britishenglish.service.impl.QueryDataImpl;

@RestController
@RequestMapping(AUTH)
public class QueryDataController {

    private final QueryDataImpl service;

    public QueryDataController(QueryDataImpl service) {
        this.service = service;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/save/enquiry")
    public QueryDataResponse saveEnquiry(@RequestBody QueryDataRequest request) {
        return service.saveQuery(request);
    }

}