package com.accolite.assessment.crudcandidates;
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
public class CandidateController {
	
	@Autowired
	private CandidatesJPARepository data;
		
	@GetMapping(path="/candidate")
	public List<Candidate> getAll(){
		return data.findAll();
	}
	
	@GetMapping("/candidate/{id}")
	public Candidate getCandidate(@PathVariable Long id){
		return data.findById(id).get();
	}
	
	
	@DeleteMapping("/candidate/{id}")
	public ResponseEntity<Void> deleteCandidate(@PathVariable Long id){
		data.deleteById(id);
		return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/candidate/{id}")
	public ResponseEntity<Candidate> updateCandidate(@PathVariable Long id,
			@RequestBody Candidate candidate){
		Candidate candidateUpdated = data.save(candidate);
		return new ResponseEntity<Candidate>(candidate , HttpStatus.OK);
		
	}
	
	@PostMapping("/candidate")
	public ResponseEntity<Void> addCandidate(@RequestBody Candidate 
			candidate){
		Candidate candidateCreated = data.save(candidate);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
		.path("/{id}").buildAndExpand(candidateCreated.getId()).toUri();
		return  ResponseEntity.created(uri).build();
		
	}
	
	

		

}
