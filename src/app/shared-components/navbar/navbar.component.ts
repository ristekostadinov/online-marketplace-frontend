import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/core/service/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 
  public loggedIn: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,  private _authService: AuthenticationService, private _router: Router) {}
  
  ngOnInit(){
    this.loggedIn = this.checkIfLoggedIn();
  }
  onLogOut(){
    this.loggedIn = !this.loggedIn;
    this._authService.logout();
  }

  onLogIn(){
    this._router.navigate(['/login'])
    location.reload()
  }

  checkIfLoggedIn(){
    return this._authService.currentUserValue != null ? true : false;
  }
}
