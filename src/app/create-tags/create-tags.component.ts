import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from './../core/service/tag.service';

@Component({
  selector: 'app-create-tags',
  templateUrl: './create-tags.component.html',
  styleUrls: ['./create-tags.component.css']
})
export class CreateTagsComponent implements OnInit {

  tagForm = this.fb.group({
    name: null
  });
  id: number = null;

  constructor(private fb: FormBuilder,
              private _tagService: TagService,
              private _router: Router,
              private _route: ActivatedRoute) {}
 
  ngOnInit(){
    this._route.paramMap.subscribe(params => {
      if(params.has('id')) {
        this._tagService.getTag(+params.get('id')).subscribe(it=> {
        this.tagForm.patchValue({name: it.name});
        this.id = it.id;
        })
      }
    });
  }

  onSubmit(): void {
    const {name} = this.tagForm.getRawValue();
    if(this.id != null){
      this._tagService.update({id: this.id, name: name}).subscribe(it=> this._router.navigate(['tags']))
    } else {
      this._tagService.saveTag({id: this.id, name: name}).subscribe(it=> this._router.navigate(['tags']));
    }
  }

}
