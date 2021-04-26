import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMarket } from '../model/market';
import {throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private readonly _url: string = "http://localhost:8080/api/markets";
  constructor(private _http: HttpClient) { }

  getMarkets(): Observable<IMarket[]>{
    return this._http.get<IMarket[]>(this._url).pipe(catchError(this.errorHandler));
  }

  saveMarket(market : IMarket): Observable<IMarket>{
    return this._http.post<IMarket>(this._url, market).pipe(catchError(this.errorHandler));
  }

  update(market: IMarket): Observable<IMarket>{
    return this._http.put<IMarket>(`${this._url}/${market.id}`, market)
    .pipe(catchError(this.errorHandler));
  }

  getMarket(id: number): Observable<IMarket> {
    return this._http.get<IMarket>(`${this._url}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this._url}/${id}`);
  }

  errorHandler(error : HttpErrorResponse){
    return ObservableThrowError(error || "Server Error")
  }
}
