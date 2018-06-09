import { HomeComponent } from './home/home.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
path: '', component: HomeComponent
},
{ path: 'menus/:menuId', component: MenuDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
