import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  patientname=""
  patientid=""
  contactno=""
  dateofappointment=""
  doctorname=""

 constructor(private api:ApiService){}

  readValues=()=>{
    let patients:any={"patientname":this.patientname,"patientid":this.patientid,"contactno":this.contactno,"dateofappointment":this.dateofappointment,"doctorname":this.doctorname}
    console.log(patients)
    this.api.addPatients(patients).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("patient added successfully")
          this.patientname=""
          this.patientid=""
          this.contactno=""
          this.dateofappointment=""
          this.doctorname=""
        } else {
          alert("something went wrong")
        }
      }
    )
  }
}
