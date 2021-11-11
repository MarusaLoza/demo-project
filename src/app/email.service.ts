import { Injectable } from '@angular/core';
import { of} from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private validEmailcodes = ['test2@test.test'];

  public setEmailCodes(email: string) {
    if ( ! this.validEmailcodes.includes(email)) {
      this.validEmailcodes.push(email);
    }
  };

  fakeHttp(value: string) {
    return  ! this.validEmailcodes.includes(value)   
  }
}