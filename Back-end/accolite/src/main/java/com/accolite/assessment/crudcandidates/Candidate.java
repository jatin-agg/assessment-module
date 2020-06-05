package com.accolite.assessment.crudcandidates;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Candidate {
	@Id
	@GeneratedValue
	private Long id;
	
	private String name;
	private int age;
	private String email;
	private String city;
	private String skills;
	private Long assignment_score;
	private Long test_score;
	
	
	public Candidate(Long id, String name, int age, String email, String city, String skills, Long assignment_score,
			Long test_score) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.email = email;
		this.city = city;
		this.skills = skills;
		this.assignment_score = assignment_score;
		this.test_score = test_score;
	}
	
	
	public Candidate() {
		super();
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public Long getAssignment_score() {
		return assignment_score;
	}
	public void setAssignment_score(Long assignment_score) {
		this.assignment_score = assignment_score;
	}
	public Long getTest_score() {
		return test_score;
	}
	public void setTest_score(Long test_score) {
		this.test_score = test_score;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Candidate other = (Candidate) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	
	
	
	
	
	
	

}
