import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../core/service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  categoryForm = this.fb.group({
    name: null
  });
  id: number = null;

  constructor(private fb: FormBuilder,
              private _categoryService: CategoryService,
              private _router: Router,
             private _route: ActivatedRoute) {}
 
  ngOnInit(){
    this._route.paramMap.subscribe(params => {
      if(params.has('id')) {
        this._categoryService.getCategory(+params.get('id')).subscribe(it=> {
        this.categoryForm.patchValue({name: it.name});
        this.id = it.id;
        })
      }
    });
  }

  onSubmit(): void {
    const {name} = this.categoryForm.getRawValue();
    if(this.id != null){
      this._categoryService.update({id: this.id, name: name}).subscribe(it=> this._router.navigate(['categories']))
    } else {
      this._categoryService.saveCategory({id: this.id, name: name}).subscribe(it=> this._router.navigate(['categories']));
    }
  }
}
