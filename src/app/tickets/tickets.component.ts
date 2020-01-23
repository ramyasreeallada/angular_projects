import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  to_do_lst=[];
  work_selected_arr=[];
  work_completed_arr=[];
  index_arr=[];
  work_pending_arr=[];
  work_pending_per;
  work_completed_per;
  to_do;
  task;
  uuidValue:string;
  constructor() {
    this.to_do_lst=[];
    this.work_selected_arr=[];
    this.work_completed_arr=[];
    this.work_pending_arr=[];
    this.work_completed_per='';
    this.work_pending_per='';
    this.index_arr=[];
    
   }

/* Percent Work Complete = (Actual Work / Work) * 100 
Percent Work Pending = (Pending Work / Work) * 100
*/
  ngOnInit() {
  }

  add_task(){
    this.uuidValue=UUID.UUID();
    this.to_do = {
        task_id: this.uuidValue,
        task_desc: this.task,
        isDisabled:false
      }
    this.to_do_lst.push(this.to_do);
    this.work_pending_arr = this.to_do_lst
    
  }

  work_done(){

    this.work_selected_arr.forEach( (element) => {
        this.work_completed_arr.push(element);
        let index = this.work_selected_arr.findIndex(d => d.task_id === element.task_id); //find index in your array
        this.index_arr.push(index);
        
       let find_id = element.task_id;

       this.to_do_lst.find(v => v.task_id == find_id).isDisabled = true;

    });

    
    
    let i = this.index_arr.length
    while (i--) {
       this.work_selected_arr.splice(i, 1);
       
    }

    this.work_pending_arr = this.to_do_lst.filter(e => !this.work_completed_arr.find(a => e.task_id == a.task_id));
    this.work_calculation()
    
  }

  work_selected(work,e){

    //console.log(work);
    this.work_selected_arr.push(work);
    /*if(e.type=='click')
            {
                if(e.target.checked)
                {
                  this.grandTotal=this.grandTotal+item.total;
                }
                else
                {
                  this.grandTotal=this.grandTotal-item.total;
                  item.total=0;
                } 
            }*/
  }

  completed_close(work,e){
      this.work_pending_arr.push(work);
      let index = this.work_completed_arr.findIndex(d => d.task_id === work.task_id);
      this.work_completed_arr.splice(index, 1);
      this.work_calculation()
      console.log(this.work_selected_arr);
  }

 pending_close(work,e){
    let index = this.work_pending_arr.findIndex(d => d.task_id === work.task_id);
    this.work_pending_arr.splice(index, 1);
    this.to_do_lst.find(v => v.task_id == work.task_id).isDisabled = false;
 }

  work_calculation(){
        this.work_completed_per=((this.work_completed_arr.length/this.to_do_lst.length) * 100).toFixed();
        this.work_pending_per=((this.work_pending_arr.length/this.to_do_lst.length) * 100).toFixed();
  }

  



}
