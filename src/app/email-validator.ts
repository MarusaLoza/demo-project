
import {AbstractControl} from '@angular/forms';
import { EmailService } from './email.service';

export class EmailValidator {
  static createValidator(emailService: EmailService): any {
    return (control: AbstractControl) => {
     
        if(emailService.fakeHttp(control.value)){
           return (null)
        }
        else return {invalidAsync: true}  
    };
  }
}