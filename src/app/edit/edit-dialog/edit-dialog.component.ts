import { Component, OnInit } from '@angular/core';
import { dataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  items:any = []
  constructor(
    private dataService:dataService,
    private service: ItemsService,
    private router: Router,
    public dialogDataRef: MatDialogRef<EditDialogComponent>
  ) { }

  ngOnInit(): void {
    this.items = this.dataService.getData();
  }

  onSubmit(form: NgForm){
    console.log(this.items)
    this.service.updateItems
    (this.items.id,form.value.name, form.value.description, form.value.createdAt, form.value.editedAt).subscribe(coll=>{
      console.log('111',coll)
      this.router.navigate(['/'])
      this.dialogDataRef.close()
    })
  }

}
