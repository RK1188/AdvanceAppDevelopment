package com.ranjith.britishenglish.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ranjith.britishenglish.model.CourseAdd;
import com.ranjith.britishenglish.model.CourseAdd.CourseAddBuilder;

public interface CourseAddRepo extends JpaRepository<CourseAdd,String>{

    void save(CourseAddBuilder query);
  
    
}