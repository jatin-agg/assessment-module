import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { candidates } from './candidates';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  retrieveCandidates(){
    return this.http.get<candidates[]>('http://localhost:8080/candidate');

  }

  deleteit(id){
    return this.http.delete(`http://localhost:8080/candidate/${id}`);
  }

  retrieveById(id){
    return this.http.get<candidates>(`http://localhost:8080/candidate/${id}`);
  }

  updateCandidates(id, candidate){
    return this.http.put(`http://localhost:8080/candidate/${id}` , candidate);
  }

  createCandidates(candidate){
    return this.http.post(`http://localhost:8080/candidate` , candidate);
  }

  constructor(private http:HttpClient) { }
}
