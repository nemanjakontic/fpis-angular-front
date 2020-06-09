import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Clan} from '../modeli/clan.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  clanovi: Clan[] = [
      new Clan(1, 'Nemanja', 'Kontic', '24-06-1997', 'https://analizaumetnickogdela.files.wordpress.com/2014/06/monalisa.jpg'),
      new Clan(2, 'Nemanja', 'Kontic', '24-06-1997', 'https://analizaumetnickogdela.files.wordpress.com/2014/06/monalisa.jpg'),
      new Clan(3, 'Nemanja', 'Kontic', '24-06-1997', 'https://analizaumetnickogdela.files.wordpress.com/2014/06/monalisa.jpg')
  ];
  clanoviUpdated = new Subject<Clan[]>();

  constructor(private http: HttpClient) { }

  getClanovi() {
    // this.http
    //   .get<{clanovi: Clan[], poruka: string}>('http://localhost:8080/api/clanovi')
    //   .subscribe(response => {
    //     console.log(response);
    //   });
    return this.clanovi;
  }
}
