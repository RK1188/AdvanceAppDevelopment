package com.ranjith.britishenglish.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QueryDataRequest {

    private String course_name;

    private String enquiryDescription;

    private String email;

    private String enquiryType;
}