package com.ranjith.britishenglish.service;

import com.ranjith.britishenglish.dto.request.QueryDataRequest;
import com.ranjith.britishenglish.dto.response.QueryDataResponse;

public interface QueryDataService {
    QueryDataResponse saveQuery(QueryDataRequest data);
}