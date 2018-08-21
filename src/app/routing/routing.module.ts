import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {SearchComponent} from '../search/search.component';
import {LoginComponent} from '../login/login.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {ItemDetailsComponent} from '../item-details/item-details.component';
import {UserDetailsComponent} from '../user-details/user-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'item-details/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
