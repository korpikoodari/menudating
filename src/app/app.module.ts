import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    MenuItemComponent,
    MenuDetailComponent,
    SearchComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
