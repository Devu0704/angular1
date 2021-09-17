import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {empData,BaseUrl} from 'src/app/shared/constant/constant';
import { IEmployee } from '../interface/employee.modal';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  EmployeeData=empData;

  constructor(private _http:HttpClient) { }

  employeeDetail(){
    return this.EmployeeData;
  }

  //fetching data from server database
  getUserRecord():Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(BaseUrl);
  }

  //delete data from server database
  deleteRecord(id:any){
    const url:string=`${BaseUrl}/${id}`;
    return this._http.delete(url);
  }

  addRecord(emp:any){
    return this._http.post(BaseUrl,emp);
  }

  getSingleRecord(id:number){
    const url:string=`${BaseUrl}/${id}`;
    return this._http.get<IEmployee>(url);
  }

  updateRecord(emp:any){
    const url:string=`${BaseUrl}/${emp.id}`;
    return this._http.put(url,emp);
  }
}
