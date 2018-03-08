import { Http, Response, Headers, RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  // projectURL: string = 'http://192.168.15.187:8000';
  projectURL: string = 'https://qcitech.org:8081';
  responseSocketURL: string = 'ws://192.168.15.187:8000';

  constructor( private http: Http, ) {}

  Login(data) {
    return this.http.post(this.projectURL+'/login',data).map(res=>res.json());
  }

  getTableData(){
    return this.http.get(this.projectURL+'/getyearwisesummary').map(res=>res.json());
  }

  GetSubsidarySummary(subsidary){
    return this.http.get(this.projectURL+'/getsubsidiarysummary').map(res=>res.json());
  }

  GetNewLocationMonthlyLifting(month,subsidary,location){

    let tempData = new FormData();
    tempData.append('month',month);
    tempData.append('subsidary',subsidary);
    tempData.append('location',location);

    return this.http.post(this.projectURL+'/getnewlocationmonthlylifting',tempData).map(res=>res.json());
  }

  GetMonthName() {
    return this.http.get(this.projectURL+'/getmonths').map(res=>res.json());
  }

  GetSubsidiaryLocation(loc) {
    let tempData = new FormData();
    tempData.append('subsidary',loc);
    return this.http.post(this.projectURL+'/getlocations',tempData).map(res=>res.json());
  }

}
