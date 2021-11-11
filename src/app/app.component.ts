import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';
  myForm: FormGroup;
  technology: any = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  };
  technologyKeys: string[] = Object.keys(this.technology);
  technologyValues!: string[];
  selectedTech:any;
  hobbies : any[] = [];
  isVersionSelected: boolean = true;

  constructor(private fb: FormBuilder) {
    this.myForm = new FormGroup({
      userName : new FormControl("", Validators.required),
      userSurname : new FormControl("", Validators.required),
      userTechnology : new FormControl({}, Validators.required),
      userTechnologyVersion : new FormControl({}, Validators.required),
      userHobbi : new FormArray(this.hobbies),
    });
    this.myForm.controls['userTechnologyVersion'].disable();
  };

  ngOnInit() {};

  techSelect() {
    let selectedTech = this.myForm.controls['userTechnology'].value;
    this.myForm.controls['userTechnologyVersion'].enable();
    this.technologyValues = this.technology[selectedTech]
  };

  getFormsControls() : FormArray {
    return this.myForm.controls['userHobbi'] as FormArray;
  };

  addHobby() {
     (this.myForm.controls["userHobbi"] as FormArray)
      .push(new FormControl('', Validators.required));
      console.log(this.myForm);
  };

  log(){
    console.log(this.myForm);
  };




}
