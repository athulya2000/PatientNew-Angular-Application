import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {

  patientid=""

  SearchData:any=[]

  constructor(private api:ApiService,private route:Router){}

  readValues=()=>{
    let data:any={"patientid":this.patientid}
    console.log(data)
    this.api.searchPatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Invalide patient id")
        } else {
          this.SearchData=response
          
        }
      }
    )
  }
  deleteBtnClick=(id:any)=>{
   let data:any={
    "id":id}
    this.api.deletePatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status== "success") {
          alert("patient deleted successfully")
          this.SearchData=[]
          this.patientid=""
          this.route.navigate(['/search']) 
        } else {
          alert("invalid id")
          this.patientid=""
        }
      }
    )

    }
    
    
    
    
  }

