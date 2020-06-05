import { Injectable } from '@angular/core';
import { Assessments } from './assessments';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {


  retrieveAssessments(){
    return this.http.get<Assessments[]>('http://localhost:8080/assessment');

  }

  deleteit(id){
    return this.http.delete(`http://localhost:8080/assessment/${id}`);
  }

  retrieveById(id){
    return this.http.get<Assessments>(`http://localhost:8080/assessment/${id}`);
  }

  updateAssessment(id, assessment){
    return this.http.put(`http://localhost:8080/assessment/${id}` , assessment);
  }

  createAssessment(assessment){
    return this.http.post(`http://localhost:8080/assessment` , assessment);
  }

  constructor(private http:HttpClient) { }





}
