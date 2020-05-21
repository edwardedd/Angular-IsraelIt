import { NgModule } from '@angular/core';
import {MatToolbarModule} from'@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';


const MaterialComponents = [
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatFormFieldModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
