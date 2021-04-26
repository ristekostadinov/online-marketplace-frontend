import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { CreateCategoryComponent } from 'src/app/create-category/create-category.component';
import { CreateTagsComponent } from 'src/app/create-tags/create-tags.component';
import { ListTagsComponent } from 'src/app/list-tags/list-tags.component';
import { HomePageComponent } from '../../home-page/home-page.component';
import { ListCategoriesComponent } from '../../list-categories/list-categories.component';
import { AuthGuard } from '../guard/auth.guard';
import { LoginComponent } from '../login/login.component';

const routes : Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "categories", component: ListCategoriesComponent, canActivate: [AuthGuard]
  },
  {
    path: "categories/create", component: CreateCategoryComponent, canActivate: [AuthGuard]
  },
  {
    path: "categories/:id", component: CreateCategoryComponent, canActivate: [AuthGuard]
  },
  {
    path: "tags", component: ListTagsComponent, canActivate: [AuthGuard]
  },
  {
    path: "tags/create", component: CreateTagsComponent, canActivate: [AuthGuard]
  },
  {
    path: "tags/:id", component: CreateTagsComponent, canActivate: [AuthGuard]
  },
  {
    path: "login", component: LoginComponent
  }

];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, ListCategoriesComponent, CreateCategoryComponent, ListTagsComponent, CreateTagsComponent]
