    package com.ranjith.britishenglish.repository;

    import org.springframework.data.jpa.repository.JpaRepository;


import com.ranjith.britishenglish.model.QueryData;
import com.ranjith.britishenglish.model.QueryData.QueryDataBuilder;

    public interface QueryDataRepo extends JpaRepository<QueryData,String>{

        void save(QueryDataBuilder query);
      
        
    }