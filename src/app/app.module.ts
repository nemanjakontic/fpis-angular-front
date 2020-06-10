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
    UplatnicaNovaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
