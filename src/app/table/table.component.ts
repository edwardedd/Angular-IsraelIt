import { Component, OnInit } from '@angular/core';

export interface ItemsElement {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  editedAt: string;
}

const items: ItemsElement[] = [
  {
    "id": 1,
    "name":"book",
    "description":"fantasy",
    "createdAt":"10.02.2020",
    "editedAt":"11.02.2020"
  },
  {
    "id": 2,
    "name":"book",
    "description":"uthopy",
    "createdAt":"10.02.2020",
    "editedAt":"11.02.2020"
  }
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource = items;
  displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'editedAt'];

  constructor() { }

  ngOnInit(): void {
  }

}
