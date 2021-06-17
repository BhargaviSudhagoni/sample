import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'
import {  Observable} from "rxjs";
import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PMserviceService {

  constructor(private http:HttpClient) { }
url=environment.url;

saveGoal(data:any){
    return this.http.post(this.url+"/saveGoals",data,{responseType:'json'});
  }
  saveDimension(data:any){
return this.http.post(this.url+"/saveDimension",data,{responseType:'json'});
  }
  saveEmpGoal(data:any){
return this.http.post(this.url+"/employee/goal",data,{responseType:'json'});
  }
  getProfile(data:any){
    return this.http.get(this.url+"/profile/",{});
      }
  getProfileById(id:any){
        return this.http.get(this.url+"/profile/"+id
      ); 
      }
  getPIPByEmpId(id:any){
        return this.http.get(this.url+"/pip/"+id,{responseType:'json'});
      }
      getByPIPId(id:any){
        return this.http.get(this.url+"/pip/pipid/"+id);
      }
      savePIPResult(id:any,data:any){
        return this.http.put(this.url+"/update/pip/"+id,data,{responseType:'json'});
      }

      public sideNavState$: Subject<boolean> = new Subject();
    }
    
