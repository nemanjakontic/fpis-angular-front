import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClanoviComponent} from './clanovi/clanovi.component';
import {UplatniceComponent} from './uplatnice/uplatnice.component';
import {UplatnicaNovaComponent} from './uplatnice/uplatnica-nova/uplatnica-nova.component';
import {PotvrdeComponent} from './potvrde/potvrde.component';
import {PotvrdaNovaComponent} from './potvrde/potvrda-nova/potvrda-nova.component';
import {ClanarineComponent} from './clanarine/clanarine.component';
import {ClanNoviComponent} from './clanovi/clan-novi/clan-novi.component';
import {ClanDetailComponent} from './clanovi/clanovi-list/clan-detail/clan-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/clanovi', pathMatch: 'full' },
  { path: 'clanovi', component: ClanoviComponent},
  { path: 'clanovi/novi', component: ClanNoviComponent},
  { path: 'clanovi/:id', component: ClanDetailComponent},
  { path: 'clanovi/:clanId/edit', component: ClanNoviComponent},
  { path: ':id/uplatnice', component: UplatniceComponent},
  { path: ':id/uplatnice/edit/:uplatnicaId', component: UplatnicaNovaComponent},
  { path: 'uplatnice/nova', component: UplatnicaNovaComponent},
  { path: 'potvrde/nova', component: PotvrdaNovaComponent},
  { path: ':id/potvrde', component: PotvrdeComponent},
  { path: ':id/clanarine', component: ClanarineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
