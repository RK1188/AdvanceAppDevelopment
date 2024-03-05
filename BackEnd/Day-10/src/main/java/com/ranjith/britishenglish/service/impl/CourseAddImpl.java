package com.ranjith.britishenglish.service.impl;

import org.springframework.stereotype.Service;

import com.ranjith.britishenglish.dto.request.CourseAddRequest;
import com.ranjith.britishenglish.dto.response.CourseAddResponse;
import com.ranjith.britishenglish.model.CourseAdd;
import com.ranjith.britishenglish.repository.CourseAddRepo;
import com.ranjith.britishenglish.service.CourseAddService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseAddImpl implements CourseAddService {

    private final CourseAddRepo repo;

    @Override
    public CourseAddResponse saveQuery(CourseAddRequest request) {
        // return repo.save(data);
        var query = CourseAdd.builder()
                .CourseName(request.getCourseName())
                .CourseDuration(request.getCourseDuration())
                .CourseType(request.getCourseType())
                .fees(request.getFees());
        repo.save(query);

        return CourseAddResponse.builder().message("saved").build();
    }

}