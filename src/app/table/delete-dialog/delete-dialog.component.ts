import { Component, OnInit } from '@angular/core';
import { dataService } from 'src/app/services/data.service';
import { ItemsService } from 'src/app/services/items.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  id:number = null

  constructor(
    private service:dataService,
    private itemService: ItemsService,
    public deleteDialogRef: MatDialogRef<DeleteDialogComponent>
    ) { }

  ngOnInit(): void {
    this.id = this.service.getId()
  }

  deleteTodo() {
    this.itemService.deleteItems(this.id).subscribe(call =>{
      console.log(call);
      window.location.reload()
    })
  }

  closeDelete(){
    this.deleteDialogRef.close()
  }

}
