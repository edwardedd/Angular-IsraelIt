import { Component, OnInit } from '@angular/core';
import { dataService } from '../services/data.service';
import { Items } from '../services/Items';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  items:any = []

  constructor(private dataService:dataService, private dialog: MatDialog,private router:Router)  { }

  ngOnInit(): void {
    this.items = this.dataService.getData();
    this.openDialog()
  }

  openDialog() {
    const dialogDataRef = this.dialog.open(EditDialogComponent);
    dialogDataRef.afterClosed().subscribe(result => {
      console.log('dialog was closed');
      this.router.navigate(['/'])
    });
  }

}
