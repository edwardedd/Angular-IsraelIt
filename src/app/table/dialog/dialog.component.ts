import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
import { TableComponent } from '../table.component';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  startDate = new Date(2020, 0, 1);
  date: Date = null
  @Input() table: TableComponent

  constructor
  (
    private itemSrvice: ItemsService,
    private router:Router,
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
      let createdAt = form.value.createdAt
      let editedAt = form.value.editedAt
     this.itemSrvice.postItems
     (form.value.idValue,form.value.name, form.value.description, createdAt, editedAt).subscribe(coll=>{
       console.log('111',coll)
       window.location.reload()
     })

     form.reset();
  }

}
