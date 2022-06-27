import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../core/Item.service';
import { Item } from '../model/item';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items!:Item[];
    constructor(private router:Router,private apiService: ItemService) { }

  ngOnInit(): void {
   this.viewData() 
  }
  viewData():void{
    this.apiService.viewAllItem()
    .subscribe( (data:any) => {
        console.log(data);
      this.items = data;

    
    });
  }

}
