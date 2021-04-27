import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlace } from '../model/place';
import {throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private readonly _url: string = "http://localhost:8080/api/places";
  constructor(private _http: HttpClient) { }
  
  getPlaces(): Observable<IPlace[]>{
    return this._http.get<IPlace[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return ObservableThrowError(error || "Server Error")
  }
}
