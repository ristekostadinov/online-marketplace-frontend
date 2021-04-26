import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ITag } from '../core/model/tag';
import { TagService } from './../core/service/tag.service'

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.css']
})
export class ListTagsComponent implements OnInit {
  public tags: any [];
  public error: string;

  constructor(private _tagService:TagService, private _router: Router) { }

  displayedColumns: string[] = ['name', 'edit', 'delete'];
  reload$ = new Subject<void>();

  ngOnInit(): void {
    this.reload$.pipe(switchMap(() => this._tagService.getTags() ))
      .subscribe(data => this.tags = data, err => this.error = err );
      this.reload$.next();
  }

  onEdit(tag: ITag) {
    this._router.navigate(['tags', tag.id]);
  }

  onDelete(tag: ITag) {
    this._tagService.delete(tag.id).subscribe(it => this.reload$.next() );
  }

}
