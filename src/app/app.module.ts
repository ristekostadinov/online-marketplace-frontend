import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './core/guard/auth.guard';
import { MaterialModule } from './core/material/material.module';
import { AppRoutingModule, routingComponents } from './core/app-routing/app-routing.module';
import { AuthenticationService } from './core/service/authentication-service';
import { JwtInterceptor } from './interceptors/jwt.interceptors';
import { NavbarComponent } from './shared-components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
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
