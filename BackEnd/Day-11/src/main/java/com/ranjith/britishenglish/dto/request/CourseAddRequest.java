package com.ranjith.britishenglish.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseAddRequest {
    
    private String CourseName;

    private String CourseDuration;

    private String CourseType;

    private String fees;
}