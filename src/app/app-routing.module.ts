import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClanoviComponent} from './clanovi/clanovi.component';


const routes: Routes = [
  { path: '', redirectTo: '/clanovi', pathMatch: 'full' },
  { path: 'clanovi', component: ClanoviComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
