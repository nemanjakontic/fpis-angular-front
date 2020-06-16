import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClanoviComponent} from './clanovi/clanovi.component';
import {UplatniceComponent} from './uplatnice/uplatnice.component';
import {UplatnicaNovaComponent} from './uplatnice/uplatnica-nova/uplatnica-nova.component';
import {PotvrdeComponent} from './potvrde/potvrde.component';
import {PotvrdaNovaComponent} from './potvrde/potvrda-nova/potvrda-nova.component';


const routes: Routes = [
  { path: '', redirectTo: '/clanovi', pathMatch: 'full' },
  { path: 'clanovi', component: ClanoviComponent},
  { path: ':id/uplatnice', component: UplatniceComponent},
  { path: ':id/uplatnice/edit/:uplatnicaId', component: UplatnicaNovaComponent},
  { path: 'uplatnice/nova', component: UplatnicaNovaComponent},
  { path: 'potvrde/nova', component: PotvrdaNovaComponent},
  { path: ':id/potvrde', component: PotvrdeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
