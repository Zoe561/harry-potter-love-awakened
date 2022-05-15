import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  userDeviceSubject = new Subject<string>();
  /**
   * 使用者使用的裝置
   */
  userDevice: string;

  set setUserDeviceSubject(value: string) {
    this.userDeviceSubject.next(value);
    this.userDevice = value;
  }

  constructor() { }
}
