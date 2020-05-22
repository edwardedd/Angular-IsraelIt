import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class dataService {
  private id: number = null;
  data: any = []
  
  getData(): string[] {
    return this.data;
  }
  addData(dat:any){
    this.data = dat
  }

  getId():number {
    return this.id
  }

  addId(id:number){
    this.id = id;
  }
}