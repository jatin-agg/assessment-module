package com.accolite.assessment.crudassessment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AssessmentJPARepository extends JpaRepository<AssessmentClass,Long>{

}
