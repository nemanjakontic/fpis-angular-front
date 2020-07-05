import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClanoviComponent } from './clanovi/clanovi.component';
import { ClanoviListComponent } from './clanovi/clanovi-list/clanovi-list.component';
import { ClanItemComponent } from './clanovi/clanovi-list/clan-item/clan-item.component';
import {HttpClientModule} from '@angular/common/http';
import { UplatniceComponent } from './uplatnice/uplatnice.component';
import { UplatniceListComponent } from './uplatnice/uplatnice-list/uplatnice-list.component';
import { UplatniceItemComponent } from './uplatnice/uplatnice-list/uplatnice-item/uplatnice-item.component';
import { UplatnicaNovaComponent } from './uplatnice/uplatnica-nova/uplatnica-nova.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PotvrdeComponent } from './potvrde/potvrde.component';
import { PotvrdeListComponent } from './potvrde/potvrde-list/potvrde-list.component';
import { PotvrdeItemComponent } from './potvrde/potvrde-list/potvrde-item/potvrde-item.component';
import { PotvrdaNovaComponent } from './potvrde/potvrda-nova/potvrda-nova.component';
import {DatePipe} from '@angular/common';
import { ClanarineComponent } from './clanarine/clanarine.component';
import { ClanarineListComponent } from './clanarine/clanarine-list/clanarine-list.component';
import { ClanNoviComponent } from './clanovi/clan-novi/clan-novi.component';
import { ClanDetailComponent } from './clanovi/clanovi-list/clan-detail/clan-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClanoviComponent,
    ClanoviListComponent,
    ClanItemComponent,
    UplatniceComponent,
    UplatniceListComponent,
    UplatniceItemComponent,
    UplatnicaNovaComponent,
    PotvrdeComponent,
    PotvrdeListComponent,
    PotvrdeItemComponent,
    PotvrdaNovaComponent,
    ClanarineComponent,
    ClanarineListComponent,
    ClanNoviComponent,
    ClanDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
