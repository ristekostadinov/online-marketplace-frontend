import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISale } from '../model/sale';
import {throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private readonly _url: string = "http://localhost:8080/api/sales";
  constructor(private _http: HttpClient) { }

  getSales(): Observable<ISale[]>{
    return this._http.get<ISale[]>(this._url).pipe(catchError(this.errorHandler));
  }

  saveSale(sale : ISale): Observable<ISale>{
    return this._http.post<ISale>(this._url, sale).pipe(catchError(this.errorHandler));
  }

  update(sale: ISale): Observable<ISale>{
    return this._http.put<ISale>(`${this._url}/${sale.id}`, sale)
    .pipe(catchError(this.errorHandler));
  }

  getSale(id: number): Observable<ISale> {
    return this._http.get<ISale>(`${this._url}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this._url}/${id}`);
  }

  errorHandler(error : HttpErrorResponse){
    return ObservableThrowError(error || "Server Error")
  }
}
