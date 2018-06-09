import { Injectable } from '@angular/core';
export class Menu {
  constructor(
    public id: number,
    public title: string,
    public location: string,
    public rating: number,
    public description: string,
    public categories: string[]) {
  }
}

@Injectable()
export class MenuService {

  constructor() { }
  
    getMenus(): Menu[] {
    return menus.map(p => new Menu(p.id, p.title, p.location, p.rating, p.description, p.categories));
  }

  getMenuById(menuId: number): Menu {
    return menus.find(p => p.id === menuId);
  }

}
const menus = [
  {
    'id': 0,
    'title': 'First Menu',
    'location':'Espoo',
    'rating': 4.3,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['fish', 'national food']
  },
  {
    'id': 1,
    'title': 'Second Menu',
      'location':'Espoo',
    'rating': 3.5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['meat','chicken']
  },
  {
    'id': 2,
    'title': 'Third Menu',
     'location':'Espoo',
    'rating': 4.2,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['grill']
  },
  {
    'id': 3,
    'title': 'Fourth Menu',
      'location':'Espoo',
    'rating': 3.9,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['hamburger']
  },
  {
    'id': 4,
    'title': 'Fifth Menu',
     'location':'Espoo',
    'rating': 5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['dairy', 'barbicue']
  },
  {
    'id': 5,
    'title': 'Sixth Menu',
      'location':'Espoo',
    'rating': 4.6,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  }
];
