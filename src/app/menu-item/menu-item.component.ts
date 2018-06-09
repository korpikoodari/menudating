import { Component,Input} from '@angular/core';
import {Menu} from '../shared/menu.service';
@Component({
  selector: 'dating-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent  {
    @Input() menu: Menu;

}
