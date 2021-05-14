import { ProfileGuard } from './guards/profile.guard';
import { LoginComponent } from './login/login.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SearchModule } from './search/search.module';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then((m) => m.CatalogModule)
  },
  {
    path: 'profile',
    // canLoad: [ProfileGuard],
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: 'sign-in',
    canDeactivate: [ProfileGuard],
    component: SignInComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}

