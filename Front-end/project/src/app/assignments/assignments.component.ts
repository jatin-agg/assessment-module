import { Component, OnInit } from '@angular/core';
import { Assessments } from '../assessments';
import { AssessmentService } from '../assessment.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  MockData : Assessments[] ;

  constructor(private assessmentService:AssessmentService , private router:Router) { }

  ngOnInit(): void {

    this.refreshAssessments();
    
  }


  refreshAssessments(){
    this.assessmentService.retrieveAssessments().subscribe(
      response => {
        console.log(response);
        this.MockData = response;
      }
    );

  }


  deleteAssessments(id){
    this.assessmentService.deleteit(id).subscribe(
      response=>{
        console.log(response);
        this.refreshAssessments();
      }
    )
  }

  updateAssessment(id) {
    console.log(`update ${id}`)
    this.router.navigate(['assessment',id])
  }

  addAssessment() {
    this.router.navigate(['assessment',-1])
  }


}
