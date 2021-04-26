import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITag } from '../model/tag';
import {throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private readonly _url: string = "http://localhost:8080/api/tags";
  constructor(private _http: HttpClient) { }

  getTags(): Observable<ITag[]>{
    return this._http.get<ITag[]>(this._url).pipe(catchError(this.errorHandler));
  }

  saveTag(tag : ITag): Observable<ITag>{
    return this._http.post<ITag>(this._url, tag).pipe(catchError(this.errorHandler));
  }

  update(tag: ITag): Observable<ITag>{
    return this._http.put<ITag>(`${this._url}/${tag.id}`, tag)
    .pipe(catchError(this.errorHandler));
  }

  getTag(id: number): Observable<ITag> {
    return this._http.get<ITag>(`${this._url}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this._url}/${id}`);
  }

  errorHandler(error : HttpErrorResponse){
    return ObservableThrowError(error || "Server Error")
  }
}
