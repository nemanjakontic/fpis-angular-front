import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClanoviComponent} from './clanovi/clanovi.component';
import {ClanoviListComponent} from './clanovi/clanovi-list/clanovi-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/clanovi', pathMatch: 'full' },
  { path: 'clanovi', component: ClanoviComponent, children: [
      { path: '', component: ClanoviListComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
