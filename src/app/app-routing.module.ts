import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
        {
            path: 'home',
            loadChildren: () => 
                import('@modules/home/home.module').then(m => m.HomeModule)
        },
        {
            path: 'favoritos',
            loadChildren: () => 
                import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
        },
        { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
