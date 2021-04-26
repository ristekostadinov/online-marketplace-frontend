import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { HomePageComponent } from '../../home-page/home-page.component';
import { ListCategoriesComponent } from '../../list-categories/list-categories.component';

const routes : Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "categories", component: ListCategoriesComponent
  }
];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, ListCategoriesComponent]