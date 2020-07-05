import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Clan} from '../modeli/clan.model';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  clanovi: Clan[] = [];
  clanoviUpdated = new Subject<Clan[]>();
  poruka = new Subject<string>();
  clanUpdated = new Subject<Clan>();

  constructor(private http: HttpClient) { }

  getClanovi() {
     this.http
      .get<{clanovi: Clan[], poruka: string}>('http://localhost:8080/api/clanovi')
      .subscribe(response => {
        console.log(response.clanovi);
        this.clanoviUpdated.next(response.clanovi);
      });
  }

  getClan(clan: Clan) {
      return this.http
        .get<{clan: Clan, poruka: string}>
        ('http://localhost:8080/api/clanovi/' + clan.clanId)
        .pipe(map(response => {
          return response.clan.clanarine;
        }));
  }

  getClanById(clanId: number) {
    return this.http
      .get<{clan: Clan, poruka: string}>
      ('http://localhost:8080/api/clanovi/' + clanId)
      .pipe(map(response => {
      return response.clan.clanarine;
    }));
  }

  addClan(clan: Clan) {
    this.http.post<{clan: Clan, poruka: string}>('http://localhost:8080/api/clanovi', clan)
      .subscribe(response => {
        console.log(response);
        this.poruka.next(response.poruka);
      });
  }

  getOnlyClanById(clanId: number) {
    this.http
      .get<{clan: Clan, poruka: string}>
      ('http://localhost:8080/api/clanovi/' + clanId)
      .subscribe(podaci => {
        this.clanUpdated.next(podaci.clan);
      });
  }

  updateClan(clan: Clan) {
    this.http.post<{clan: Clan, poruka: string}>('http://localhost:8080/api/clanovi/edit', clan)
      .subscribe(response => {
        console.log(response);
        this.poruka.next(response.poruka);
        this.clanUpdated.next(response.clan);
      });
  }
}
