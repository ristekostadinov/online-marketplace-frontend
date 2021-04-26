import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { MaterialModule } from './core/material/material.module';
import { AppRoutingModule, routingComponents } from './core/app-routing/app-routing.module';
import { AuthenticationService } from './core/service/authentication-service';
import { JwtInterceptor } from './interceptors/jwt.interceptors';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CreateTagsComponent } from './create-tags/create-tags.component';
import { ListTagsComponent } from './list-tags/list-tags.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    CreateTagsComponent,
    ListTagsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MaterialModule,
  ],
  providers: [    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
