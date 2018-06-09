import { Component, OnInit } from '@angular/core';
import {Menu,MenuService} from '../shared/menu.service';

@Component({
  selector: 'dating-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  menus: Menu[]=[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menus=this.menuService.getMenus();
  }

}
