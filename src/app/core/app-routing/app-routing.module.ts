import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { CreateCategoryComponent } from 'src/app/create-category/create-category.component';
import { CreateTagsComponent } from 'src/app/create-tags/create-tags.component';
import { ListTagsComponent } from 'src/app/list-tags/list-tags.component';
import { HomePageComponent } from '../../home-page/home-page.component';
import { ListCategoriesComponent } from '../../list-categories/list-categories.component';

const routes : Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "categories", component: ListCategoriesComponent
  },
  {
    path: "categories/create", component: CreateCategoryComponent
  },
  {
    path: "categories/:id", component: CreateCategoryComponent
  },
  {
    path: "tags", component: ListTagsComponent
  },
  {
    path: "tags/create", component: CreateTagsComponent
  },
  {
    path: "tags/:id", component: CreateTagsComponent
  }
];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, ListCategoriesComponent, CreateCategoryComponent, ListTagsComponent, CreateTagsComponent]