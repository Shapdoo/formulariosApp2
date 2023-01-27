import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  
  constructor(private _http: HttpClient) {}

  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {

    const email = control.value;

    return this._http
      .get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(3000),
        map( response => {
          return ( response.length === 0 ? null : {emailTomado: true})
        })
      );
  }
}
