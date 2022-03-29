import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import {AboutComponent} from './components/pages/about/about.component';
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemComponent } from './components/pages/item/item.component';

const routes: Routes = [
  {path:'porfolio',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'item/:id',component: ItemComponent},
  {path:'buscar/:textoBusq', component: BusquedaComponent},
  {path:'**',component: HomeComponent}, //Este el ultimo pq va x orden y sino cualquier palabra ira ahi
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})], //useHash corta el URL donde toca
  exports: [RouterModule]
})
export class AppRoutingModule { }
