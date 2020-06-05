package com.accolite.assessment.crudcandidates;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidatesJPARepository extends JpaRepository<Candidate , Long>{

}
