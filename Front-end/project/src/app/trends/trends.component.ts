import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../location';
import { Chart } from 'chart.js';  
import { candidates } from '../candidates';
import { CandidatesService } from '../candidates.service';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  data: Location[]
  location = []
  count = []
  barchart = []
 
 
  constructor(private candidateService:CandidatesService  , private http: HttpClient) { }

  ngOnInit(): void {
  this.refreshLocation();

  }

  refreshLocation(){

    this.http.get<candidates[]>('http://localhost:8080/candidate').subscribe((result: candidates[]) => {  
      result.forEach(x => {  
        if(this.location.indexOf(x.city)==-1){
          this.location.push(x.city)
          this.count.push(1)
        }
        else{
          this.count[this.location.indexOf(x.city)] = this.count[this.location.indexOf(x.city)] + 1
        }
       
      });

      this  
      this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.location,  
          datasets: [  
            {  
              data: this.count,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  }


  

}
