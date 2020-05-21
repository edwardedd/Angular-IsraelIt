import { Component, OnInit } from '@angular/core';
import { Items } from '../services/Items';
import { ItemsService } from '../services/items.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { dataService } from '../services/data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  items: Items[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'editedAt'];

  constructor(
    private itemServise: ItemsService,
    private dialog:MatDialog,
    private router:Router,
    private dataService:dataService
  ) { }

  ngOnInit(): void {
    this.itemServise.getAllItems().subscribe
    (
      (response) =>
      {
        this.items = response
      },
      (error) => console.log(error)
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

  redirect() {
    this.router.navigate(['/auth'])
  }

  sendData(item) {
    console.log(item)
    
    this.dataService.addData(item)
    this.router.navigate(['/edit'])

  }

  editItem(e) {
    e.stopPropagation();
    console.log('123')
  }

  deleteItem(e, id) {
    e.stopPropagation();
    console.log(id)
    this.itemServise.deleteItems(id).subscribe()
  }

}
