import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   isUserLoggedIn: boolean = false;

   login(employeeId: string): Observable<boolean> {
      console.log(employeeId);
      this.isUserLoggedIn = employeeId == '1234';
      // this.isUserLoggedIn = ( employeeId == '1234') --> เช็คก่อนว่า employid ใช่ 1234มั้ย ถ้าใช่ก็ true
      //ถ้าไม่ใช่ ก็ false จากนั้น ค่าของ this.isUserLoggedIn ก็จะถูกเปลี่ยนไปตามที่ออกมาจากตอนแรก แล้วถูกส่งไปเก็บที่ val บรรทัด 26
      // if (employeeId=='1234') {
      //   this.isUserLoggedIn = true
      // }
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

   return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
      // val คือตัวแปรที่เก็บค่า boolean ที่ออกมาจากบรรทัดที่ 15 อีกที
   );
   }

   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }

   constructor() { }
}