import { NgModule } from '@angular/core';
import {MatButtonModule}  from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


const Material = [
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatListModule,
   MatSidenavModule,
   MatToolbarModule,
   LayoutModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatCardModule,
   ReactiveFormsModule,
   MatTableModule
];

@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
