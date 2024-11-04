import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  static getEnumKeyByValue = (enumObj: any, value: number) =>
    Object.keys(enumObj).find((key) => enumObj[key] === value);
  constructor() {}
}
