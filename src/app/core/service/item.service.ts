import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IItem } from '../model/item';
import {throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly _url: string = "http://localhost:8080/api/items";
  constructor(private _http: HttpClient) { }

  getItems(): Observable<IItem[]>{
    return this._http.get<IItem[]>(this._url).pipe(catchError(this.errorHandler));
  }

  saveItem(item : IItem): Observable<IItem>{
    return this._http.post<IItem>(this._url, item).pipe(catchError(this.errorHandler));
  }

  update(item: IItem): Observable<IItem>{
    return this._http.put<IItem>(`${this._url}/${item.id}`, item)
    .pipe(catchError(this.errorHandler));
  }

  getItem(id: number): Observable<IItem> {
    return this._http.get<IItem>(`${this._url}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this._url}/${id}`);
  }

  errorHandler(error : HttpErrorResponse){
    return ObservableThrowError(error || "Server Error")
  }
}
