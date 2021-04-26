import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ICategory } from '../core/model/category';
import { CategoryService } from '../core/service/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  public categories : any = [];
  public error : string;
  constructor(private _categoryService: CategoryService, private _router: Router) { }

  displayedColumns: string[] = ['name', 'edit', 'delete'];
  reload$ = new Subject<void>();

  ngOnInit(): void {
    this.reload$.pipe(switchMap(() => this._categoryService.getCategories() ))
      .subscribe(data => this.categories = data, err => this.error = err );
      this.reload$.next();
  }

  onEdit(category: ICategory) {
    this._router.navigate(['categories', category.id]);
  }

  onDelete(category: ICategory) {
    this._categoryService.delete(category.id).subscribe(it => this.reload$.next() );
  }

}
