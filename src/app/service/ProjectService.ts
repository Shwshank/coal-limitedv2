import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from './APIService';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  private socket;
  ws: any;
  data: any;

  emitWsMsg = new EventEmitter<any>();
  emitTableData = new EventEmitter<any>();
  emitTableHeading = new EventEmitter<any>();
  emitTableArray = new EventEmitter<any>();
  emitTableTotal = new EventEmitter<any>();

  emitOption2 = new EventEmitter<any>();
  emitOption2_legends = new EventEmitter<any>();
  emitOption2_data1 = new EventEmitter<any>();
  emitOption2_data2 = new EventEmitter<any>();

  emitOption3 = new EventEmitter<any>();
  emitOption3_legends = new EventEmitter<any>();
  emitOption3_data1 = new EventEmitter<any>();
  emitOption3_data2 = new EventEmitter<any>();

  emitOption4 = new EventEmitter<any>();
  emitOption4_legends = new EventEmitter<any>();
  emitOption4_data1 = new EventEmitter<any>();
  emitOption4_data2 = new EventEmitter<any>();

  emitOption5 = new EventEmitter<any>();
  emitOption5_legends = new EventEmitter<any>();
  emitOption5_data1 = new EventEmitter<any>();
  emitOption5_data2 = new EventEmitter<any>();

  option6_legends = new EventEmitter<any>();
  option6_data = new EventEmitter<any>();

  option7_legends = new EventEmitter<any>();
  option7_data = new EventEmitter<any>();

  emitOption8 = new EventEmitter<any>();
  emitOption8_legends = new EventEmitter<any>();
  emitOption8_data1 = new EventEmitter<any>();
  emitOption8_data2 = new EventEmitter<any>();

  constructor(private APIService: APIService, private router: Router ) {

    

  }

  login(data) {
    this.APIService.Login(data).subscribe((res)=>{
      console.log(res);
      if(res.success) {
        // localStorage.setItem('login','true1');
        // localStorage.setItem('not_All_Summary','0');
        // this.emitUserLogin.emit('user');

      } else {
        // this.toast('Invalid username or password ', 'Error!');
      }
    }, (err)=>{
      console.log(err);
      // this.toast('Invalid username or password ', 'Error!');
    });
  }

}
