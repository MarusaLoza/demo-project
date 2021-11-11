
import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from 'rxjs/operators';
import { EmailService } from './email.service';

export class EmailValidator {
  static createValidator(emailService: EmailService): AsyncValidatorFn {
    return (control: AbstractControl)  => {
      return emailService.fakeHttp(control.value).pipe(
        map((result: boolean) => result ? null : {invalidAsync: true})
      );
    };
  }
}