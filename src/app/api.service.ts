import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchPatients=()=>{
    return this.http.get("http://localhost:8080/viewpatient")
  }
  addPatients=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addpatient",dataToSend)
  }
  searchPatient=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
  deletePatient=(data:any)=>{
    return this.http.post("http://localhost:8080/delete",data)
  }
}
