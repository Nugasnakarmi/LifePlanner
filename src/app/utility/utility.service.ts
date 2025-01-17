import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  static getEnumKeyByValue = (enumObj: any, value: number) =>
    Object.keys(enumObj).find((key) => enumObj[key] === value);

  static confirmPasswordValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    return control.value.password === control.value.confirmPassword
      ? null
      : { PasswordNoMatch: true };
  };
  constructor() {}
}
