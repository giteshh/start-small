import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-otp-input',
  imports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.css'
})
export class OtpInputComponent {
  showMessage = '';
  otp = '';
  otpForm: FormGroup = new FormGroup({
    otp1: new FormControl(''),
    otp2: new FormControl(''),
    otp3: new FormControl(''),
    otp4: new FormControl(''),
    otp5: new FormControl(''),
    otp6: new FormControl('')
  });

  onKeyUp($event: KeyboardEvent, number: number) {
    const target = $event.target as HTMLInputElement;
    this.otp = target.value;
    if (this.otp.length === 1) {
      const nextInput = document.getElementById(`otp${number + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  onSubmitOtp() {
    const otp = this.otpForm.value.otp1.toString() + this.otpForm.value.otp2.toString() +
      this.otpForm.value.otp3.toString() + this.otpForm.value.otp4.toString() +
      this.otpForm.value.otp5.toString() + this.otpForm.value.otp6.toString();

    if (otp === '1234560') {
      this.showMessage = 'OTP is verified successfully';
    } else {
      this.showMessage = 'Invalid OTP';
    }
  }
}
