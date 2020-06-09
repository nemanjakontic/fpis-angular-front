import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClanoviComponent } from './clanovi/clanovi.component';
import { ClanoviListComponent } from './clanovi/clanovi-list/clanovi-list.component';
import { ClanItemComponent } from './clanovi/clanovi-list/clan-item/clan-item.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClanoviComponent,
    ClanoviListComponent,
    ClanItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
