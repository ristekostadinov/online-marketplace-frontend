import { NgModule } from '@angular/core';
import {MatButtonModule}  from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
  
const Material = [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, LayoutModule];

@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
