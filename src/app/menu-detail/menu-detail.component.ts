import { Component, OnInit } from '@angular/core';
import {Menu,MenuService} from '../shared/menu.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'dating-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  menu: Menu;

  constructor(private route: ActivatedRoute,private menuService:MenuService) { }

  ngOnInit() {
       const menuIdvalue: number = parseInt(this.route.snapshot.params['menuId']);
     this.menu = this.menuService.getMenuById(menuIdvalue);
  }

}
