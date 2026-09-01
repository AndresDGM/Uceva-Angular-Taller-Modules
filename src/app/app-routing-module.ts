import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule)
  },
  {
    path: 'metal-gear',
    loadChildren: () => import('./modules/metal-gear/metal-gear-module').then(m => m.MetalGearModule)
  },
  {
    path: 'animes',
    loadChildren: () =>
      import('./modules/anime/anime-module')
        .then(m => m.AnimeModule)
  },
  {
    path: '**',
    redirectTo: 'users'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
