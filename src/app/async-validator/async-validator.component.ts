import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import {EmailValidator} from '../email-validator';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.css']
})
export class AsyncValidatorDemoComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  currentEmail: any;
  currentEmailValue: any;

  emailSyncValidators = [
    Validators.required,
  ];

  // address: FormGroup =  new FormGroup({
  //   email: new FormControl('',
  //    this.emailSyncValidators,
  //    EmailValidator.createValidator(this.emailService))
  // });


  constructor(private emailService: EmailService, ) {
  };

  ngOnInit(): void {
    this.createForm()
  };

  createForm() {
    this.parentForm.addControl('email',
    new FormControl('', EmailValidator.createValidator(this.emailService))
    )};

  saveEmailcode(): void {
    this.currentEmail = this.parentForm.value['email'];
    this.emailService.setEmailCodes(this.currentEmail); 
  };


}