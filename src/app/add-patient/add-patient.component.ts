import { Component } from '@angular/core';

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


  readValues=()=>{
    let patients:any={"patientname":this.patientname,"patientid":this.patientid,"contactno":this.contactno,"dateofappointment":this.dateofappointment,"doctorname":this.doctorname}
    console.log(patients)
  }
}
