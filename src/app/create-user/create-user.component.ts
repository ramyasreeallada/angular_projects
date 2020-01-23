import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  countryList=[
{"name": "United States", "code": "US"},
{"name": "India", "code": "IN"},
{"name": "Canada", "code": "CA"}
];

stateList=[
{"name": "Andhra Pradesh", "code": "AP", "country":"IN"},
{"name": "Telangana", "code": "TS", "country":"IN"},
{"name": "Alaska", "code": "AL", "country":"US"},
{"name": "New York", "code": "NY", "country":"US"}
];

itemList=[
{"id":1, "name": "Water bottle", "price": "25.00","selectedQty":0,"total":0},
{"id":2, "name": "Soap", "price": "20.00","selectedQty":0,"total":0},
{"id":3, "name": "Tooth Paste", "price": "40.00","selectedQty":0,"total":0},
{"id":4, "name": "Banana", "price": "5.00","selectedQty":0,"total":0}
];


f_lst=[];
cities=[];
newTodo: string;
    todos: any;
    todoObj: any;
    grandTotal=0;
    qty;
    phoneList;
    phoneObj;
    phone_name;
    phone_number;

  constructor() {

      this.newTodo = '';
      this.todos = [];
      this.phoneList = [];
      this.qty=0;
      
   }

  ngOnInit() {

  }

  getCityByCountry(selectedCountry):void{
      //console.log(selectedCountry);
      if(selectedCountry!=''){
        console.log(selectedCountry);
        var resultObject = this.search(selectedCountry, this.stateList);
        this.cities=resultObject;
      }
      
      
    }

    search(nameKey, myArray){
      this.f_lst=[];
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].country === nameKey) {
                this.f_lst.push(myArray[i]);
            }
        }
        return this.f_lst;
        
   }

    addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      }
      this.todos.push(this.todoObj);
      this.newTodo = '';
      event.preventDefault();
    }

    deleteTodo(index) {
      this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }

    addphoneBook(){
      this.phoneObj={
        phone_name:this.phone_name,
        phone_number:this.phone_number
      }
      this.phoneList.push(this.phoneObj);
      this.phoneObj = '';
      event.preventDefault();
      
    }

    quantity(val){
        if(val=='plus'){
          this.qty=this.qty+1;
        }else{
          this.qty=this.qty-1;
        }
     
    }

    itemPurchase(item,e){
      
          item.total=item.price*item.selectedQty;
          
            if(e.type=='click')
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
            }
       

    }



   
}


