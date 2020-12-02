import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicformdemo';

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.myForm = this.fb.group({
	   formArrr: this.fb.array([])
    });
    this.addAddress();
  }

  get formArrr() {
     return this.myForm.get('formArrr') as FormArray;
  }


 addAddress(){
      const addressGroup = this.fb.group({
        'address': [''],
        'street': [''],
        'city': [''],
        'country': ['2']
      });
    this.formArrr.push(addressGroup);
  }

deleteArr(ind){
	this.formArrr.removeAt(ind);
}



}
