import { Component, OnInit } from '@angular/core';
import { Assessments } from '../assessments';
import { AssessmentService } from '../assessment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-assess',
  templateUrl: './update-assess.component.html',
  styleUrls: ['./update-assess.component.css']
})
export class UpdateAssessComponent implements OnInit {

  id:number
  assessment: Assessments

  constructor(
    private assessmentService:AssessmentService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.assessment = new Assessments();
    this.assessment.id = this.id;
    this.assessment.title = '';
    this.assessment.description = '';

    if(this.id!=-1) {
      this.assessmentService.retrieveById(this.id)
          .subscribe (
            data => this.assessment = data
          )
    }

  }

  saveAssessment() {
    if(this.id == -1) { //=== ==
      this.assessmentService.createAssessment(this.assessment)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['assessments'])
            }
          )
    } else {
      this.assessmentService.updateAssessment(this.id, this.assessment)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['assessments'])
            }
          )
    }
  }




}
