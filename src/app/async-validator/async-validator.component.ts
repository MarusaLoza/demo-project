import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { EmailValidator} from '../email-validator';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.css']
})
export class AsyncValidatorDemoComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  currentEmail!: string;
  currentEmailValue!: string;

  constructor(private emailService: EmailService) { };

  ngOnInit(): void {
    this.parentForm.addControl(
      'email', new FormControl('', [EmailValidator.createValidator(this.emailService), Validators.email,])
    )
  };

  saveEmailcode(): void {
    this.currentEmail = this.parentForm.value['email'];
    this.emailService.setEmailCodes(this.currentEmail); 
  };


}