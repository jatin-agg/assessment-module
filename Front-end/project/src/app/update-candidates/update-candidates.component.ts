import { Component, OnInit } from '@angular/core';
import { candidates } from '../candidates';
import { CandidatesService } from '../candidates.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-candidates',
  templateUrl: './update-candidates.component.html',
  styleUrls: ['./update-candidates.component.css']
})
export class UpdateCandidatesComponent implements OnInit {

  id:number
  candidate: candidates

  constructor(private candidateService:CandidatesService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.candidate = new candidates(this.id,'',0,'','','',0,0);
    if(this.id!=-1) {
      this.candidateService.retrieveById(this.id)
          .subscribe (
            data => this.candidate = data
          )
    }
  }

  saveCandidates() {
    if(this.id == -1) { //=== ==
      this.candidateService.createCandidates(this.candidate)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['candidates'])
            }
          )
    } else {
      this.candidateService.updateCandidates(this.id, this.candidate)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['candidates'])
            }
          )
    }
  }



}
