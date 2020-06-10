import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Clan} from '../modeli/clan.model';
import {Subject} from 'rxjs';

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
}
