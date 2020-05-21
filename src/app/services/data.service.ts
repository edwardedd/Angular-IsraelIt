import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class dataService {
  // private id: number = null;
  // private name: string = null;
  // private description: string = null;
  // private createdAt: Date = null;
  // private editedAt: Date = null;
  data: any = []
  
  getData(): string[] {
    // this.data = [ this.id,this.name, this.description, this.createdAt, this.editedAt]
    return this.data;
}
addData(dat:any){
  this.data = dat
    // this.id = id;
    // this.name = name;
    // this.description = description;
    // this.createdAt = createdAt;
    // this.editedAt = editedAt
}
}