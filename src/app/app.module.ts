import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './table/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { EditComponent } from './edit/edit.component';
import { EditDialogComponent } from './edit/edit-dialog/edit-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    DialogComponent,
    EditComponent,
    AuthComponent,
    EditDialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
