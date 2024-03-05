package com.ranjith.britishenglish.service.impl;

import org.springframework.stereotype.Service;

import com.ranjith.britishenglish.dto.request.QueryDataRequest;
import com.ranjith.britishenglish.dto.response.QueryDataResponse;
import com.ranjith.britishenglish.model.QueryData;
import com.ranjith.britishenglish.repository.QueryDataRepo;
import com.ranjith.britishenglish.service.QueryDataService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QueryDataImpl implements QueryDataService {

    private final QueryDataRepo repo;

    @Override
    public QueryDataResponse saveQuery(QueryDataRequest request) {
        // return repo.save(data);
        var query = QueryData.builder()
                .course_name(request.getCourse_name())
                .enquiryDescription(request.getEnquiryDescription())
                .email(request.getEmail())
                .enquiryType(request.getEnquiryType());
        repo.save(query);
        return QueryDataResponse.builder().message("saved").build();
    }

}