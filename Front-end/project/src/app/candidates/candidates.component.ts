import { Component, OnInit } from '@angular/core';
import { candidates } from '../candidates';
import { Router } from '@angular/router';
import { CandidatesService } from '../candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  MockData : candidates[] ;

  constructor(private candidateService:CandidatesService , private router:Router) { }

  ngOnInit(): void {

    this.refreshCandidates();
  }


  refreshCandidates(){
    this.candidateService.retrieveCandidates().subscribe(
      response => {
        console.log(response);
        this.MockData = response;
      }
    );

  }


  deleteCandidates(id){
    this.candidateService.deleteit(id).subscribe(
      response=>{
        console.log(response);
        this.refreshCandidates();
      }
    )
  }

  updateCandidates(id) {
    console.log(`update ${id}`)
    this.router.navigate(['candidates',id])
  }

  addCandidates() {
    this.router.navigate(['candidates',-1])
  }


}
