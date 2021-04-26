import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../core/service/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  public categories : any = [];
  public error : string;
  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this._categoryService.getCategories()
      .subscribe(data => this.categories = data, err => this.error = err );
  }

}
