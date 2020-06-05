package com.accolite.assessment.crudassessment;
import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AssessmentController {
	

	
	@Autowired
	private AssessmentJPARepository data;
		
	@GetMapping(path="/assessment")
	public List<AssessmentClass> getAll(){
		return data.findAll();
	}
	
	@GetMapping("/assessment/{id}")
	public AssessmentClass getAssessment(@PathVariable Long id){
		return data.findById(id).get();
	}
	
	
	@DeleteMapping("/assessment/{id}")
	public ResponseEntity<Void> deleteAssessment(@PathVariable Long id){
			data.deleteById(id);
			return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/assessment/{id}")
	public ResponseEntity<AssessmentClass> updateAssessment(@PathVariable Long id,
			@RequestBody AssessmentClass assessment){
		AssessmentClass assessmentUpdated = data.save(assessment);
		return new ResponseEntity<AssessmentClass>(assessment , HttpStatus.OK);
		
	}
	
	@PostMapping("/assessment")
	public ResponseEntity<Void> addAssessment(@RequestBody AssessmentClass 
			assessment){
		AssessmentClass assessmentCreated = data.save(assessment);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
		.path("/{id}").buildAndExpand(assessmentCreated.getId()).toUri();
		return  ResponseEntity.created(uri).build();
		
	}
	
	

		

}
