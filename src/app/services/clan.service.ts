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

  constructor(private http: HttpClient) { }

  getClanovi() {
     this.http
      .get<{clanovi: Clan[], poruka: string}>('http://localhost:8080/api/clanovi')
      .subscribe(response => {
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
}
