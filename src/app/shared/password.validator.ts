import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password.pristine || confirmPassword.pristine) {
    return null;
  }
  //error ka naam de dia mismatch
  
  return password && confirmPassword && password.value !== confirmPassword.value ? { 'misMatch': true } : null;
//if the validation passed we are going to return null
}