import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClanoviComponent} from './clanovi/clanovi.component';
import {UplatniceComponent} from './uplatnice/uplatnice.component';
import {UplatnicaNovaComponent} from './uplatnice/uplatnica-nova/uplatnica-nova.component';


const routes: Routes = [
  { path: '', redirectTo: '/clanovi', pathMatch: 'full' },
  { path: 'clanovi', component: ClanoviComponent},
  { path: ':id/uplatnice', component: UplatniceComponent},
  { path: 'uplatnice/nova', component: UplatnicaNovaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
