import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  skills: FormGroup;
  formErrors = {
  'fullName': '',
  'email': '',
  'phone':'',
  'skillName': '',
  'experienceInYears': '',
  'proficiency': ''
};

validationMessages = {
  'fullName': {
    'required': 'Full Name is required.',
    'minlength': 'Full Name must be greater than 2 characters.',
    'maxlength': 'Full Name must be less than 10 characters.'
  },
  'email': {
    'required': 'Email is required.',
     'emailDomain': 'Email domian should be pragimtech.com'
  },
  'phone': {
    'required': 'Phone is required.'
  },
  'skillName': {
    'required': 'Skill Name is required.',
  },
  'experienceInYears': {
    'required': 'Experience is required.',
  },
  'proficiency': {
    'required': 'Proficiency is required.',
  },
};


  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    
      /*this.employeeForm = new FormGroup({
        fullName: new FormControl(),
        email: new FormControl(),
          skills: new FormGroup({
              skillName: new FormControl(),
              experienceInYears: new FormControl(),
              proficiency: new FormControl()
          })
      });*/

     

      this.employeeForm = this.fb.group({
            fullName: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(10)]],
            //email: ['', [Validators.required,emailDomain]],
            email: ['', [Validators.required,]],
            contactPreference: ['email'],
            phone:[''],
            skills: this.fb.group({
            skillName: ['', Validators.required],
            experienceInYears: ['', Validators.required],
            proficiency: ['', Validators.required]
            }),
    });



      /*this.employeeForm.get('fullName').valueChanges.subscribe(
    value => {
      console.log(value);
    }*/

    /*this.employeeForm.valueChanges.subscribe(
    value => {
      console.log(JSON.stringify(value));
    }
    
    );*/

    this.employeeForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.employeeForm);
    });

    this.employeeForm.get('contactPreference').valueChanges.subscribe((data: string) => {
        this.onContactPrefernceChange(data);
    });

  }

  onSubmit():void{
      console.log(this.employeeForm.controls.fullName.value);

  }
  onLoadDataClick():void{

    /*this.employeeForm.setValue({
        fullName: 'ramya',
        email: 'ramya.sree530@gmail.com',
          skills: {
              skillName: 'php',
              experienceInYears: '7 years',
              proficiency: 'beginner'
          }

    })*/
    /*this.employeeForm.patchValue({
        fullName: 'ramya sree'
    });*/
    //this.logKeyValuePairs(this.employeeForm);
    this.logValidationErrors(this.employeeForm);
        console.log(this.formErrors);

   
  }


  logValidationErrors(group: FormGroup = this.employeeForm):void{
    
    Object.keys(group.controls).forEach((key: string) => {
    
    const keyName = group.get(key);
   
        if (keyName instanceof FormGroup) {
        this.logValidationErrors(keyName);
        } else {
            this.formErrors[key] = '';
            
            //if (keyName && !keyName.valid) {
                if (keyName && !keyName.valid && (keyName.touched || keyName.dirty)) {
                    console.log(keyName);

                const messages = this.validationMessages[key];
                
                for (const errorKey in keyName.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            /*else if(keyName && !keyName.valid && keyName=='contactPreference'){
                const messages = this.validationMessages[key];
                
                for (const errorKey in keyName.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }*/



        }
    });

  }



  logKeyValuePairs(group: FormGroup):void{
      
      console.log(Object.keys(group.controls));
      // loop through each key in the FormGroup
        Object.keys(group.controls).forEach((key: string) => {
    // Get a reference to the control using the FormGroup.get() method
    const keyName = group.get(key);
    // If the control is an instance of FormGroup i.e a nested FormGroup
    // then recursively call this same method (logKeyValuePairs) passing it
    // the FormGroup so we can get to the form controls in it
    if (keyName instanceof FormGroup) {
      this.logKeyValuePairs(keyName);
      // If the control is not a FormGroup then we know it's a FormControl
    } else {
      console.log('Key = ' + key + ' && Value = ' + keyName.value);
    }
  });
}

onContactPrefernceChange(selectedValue: string):void{
    //console.log(selectedValue);
    const phoneFormControl = this.employeeForm.get('phone');

    if (selectedValue === 'phone') {
        phoneFormControl.setValidators(Validators.required);
    } else {
        phoneFormControl.clearValidators();
    }
    phoneFormControl.updateValueAndValidity();
        
}

}

/*function emailDomain(domainName: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {

//function emailDomain(control: AbstractControl): { [key: string]: any } | null {
  const email: string = control.value;
  const domain = email.substring(email.lastIndexOf('@') + 1);
  //if (email === '' || domain.toLowerCase() === 'pragimtech.com') {
  if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
     return null;
  } else {
    return { 'emailDomain': true };
  }
  };
}*/
