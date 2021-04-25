import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {throwError as ObservableThrowError, Observable } from 'rxjs';
import {ICategory} from '../model/category';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _url: string = "https://localhost:8080/api/categories";
  
  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return ObservableThrowError(error || "Server Error")
  }
}
