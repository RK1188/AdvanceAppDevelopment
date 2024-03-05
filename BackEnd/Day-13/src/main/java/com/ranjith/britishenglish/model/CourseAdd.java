package com.ranjith.britishenglish.model;

import static jakarta.persistence.GenerationType.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_CourseAdd")
public class CourseAdd  {
    @Id
    @GeneratedValue(strategy = UUID)
    private String id;

    @Column(nullable = false)
    private String CourseName;

    @Column(nullable = false)
    private String CourseDuration;
    
    @Column(nullable = false)
    private String CourseType;

    @Column(nullable = false)
    private String fees;


}
