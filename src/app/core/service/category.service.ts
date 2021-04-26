import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {throwError as ObservableThrowError, Observable } from 'rxjs';
import {ICategory} from '../model/category';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly _url: string = "http://localhost:8080/api/categories";
  
  constructor(private _http: HttpClient) { }

  getCategories(): Observable<ICategory[]>{
    return this._http.get<ICategory[]>(this._url).pipe(catchError(this.errorHandler));
  }

  saveCategory(category : ICategory): Observable<ICategory>{
    return this._http.post<ICategory>(this._url, category).pipe(catchError(this.errorHandler));
  }

  update(category: ICategory): Observable<ICategory>{
    return this._http.put<ICategory>(`${this._url}/${category.id}`, category.name)
    .pipe(catchError(this.errorHandler));
  }

  getCategory(id: number): Observable<ICategory> {
    return this._http.get<ICategory>(`${this._url}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this._url}/${id}`);
  }

  errorHandler(error : HttpErrorResponse){
    return ObservableThrowError(error || "Server Error")
  }
}
