package com.ranjith.britishenglish.service;

import com.ranjith.britishenglish.dto.request.CourseAddRequest;
import com.ranjith.britishenglish.dto.response.CourseAddResponse;

public interface CourseAddService {
    CourseAddResponse saveQuery(CourseAddRequest data);
}