import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { AppRoutingModule, routingComponents } from './core/app-routing/app-routing.module';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CreateTagsComponent } from './create-tags/create-tags.component';
import { ListTagsComponent } from './list-tags/list-tags.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    CreateTagsComponent,
    ListTagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
