import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../model/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemForm!:FormGroup;
  item!:Item;
  sub!: Subscription;

  constructor(private iService:ItemService,private router:Router) { }

  ngOnInit(): void {
    this.itemForm= new FormGroup({
      item_id: new FormControl(''),
      item_name: new FormControl('',Validators.required),
      item_price:new FormControl('',Validators.required),
      item_description: new FormControl('',Validators.required),
    
  })
}

  addingItem(){
    console.log(this.itemForm.value);
    this.iService.addItem(this.itemForm.value)
    .subscribe(data =>{
      this.item=data;
    });
  }

  onAdd():void {
    alert('Item is Added Successfully');
    this.addingItem()
    this.router.navigate(['app-list'])
  }

  onSubmit1():void {
    this.router.navigate(['vendorhome'])

  }

}