import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from './Items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  mockUrl = 'http://localhost:3000/items'
  constructor(
    private http: HttpClient
  ) { }

  getAllItems() {
    return this.http.get<Items[]>(this.mockUrl )
  }

  postItems(id: number, name: string, description:string, createdAt: Date, editedAt: Date) {
    return this.http.post<Items[]>(this.mockUrl,
      {
        id:id,
        name: name,
        description: description,
        createdAt: createdAt,
        editedAt: editedAt
      })
  }

  deleteItems(id: number) {
    return this.http.delete<Items[]>(this.mockUrl+'/'+id)
  }

  updateItems (id:number,name: string, description:string, createdAt: Date, editedAt: Date) {
    return this.http.put<Items[]>(this.mockUrl+'/'+id,
      {
        id: id,
        name: name,
        description: description,
        createdAt: createdAt,
        editedAt: editedAt
      }
    )
  }
}

