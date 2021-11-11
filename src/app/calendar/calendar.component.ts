import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.parentForm.addControl(
      'calendar', new FormControl('', Validators.required)
    )
  };

  dateChange(event:any){  
    this.parentForm.controls['calendar'].setValue(event.value);
  }

}
