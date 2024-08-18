import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }
