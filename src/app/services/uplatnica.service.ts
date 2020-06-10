import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Uplatnica} from '../modeli/uplatnica.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UplatnicaService {

  uplatnice: Uplatnica[];
  uplatniceUpdated = new Subject<Uplatnica[]>();

  constructor(private http: HttpClient) { }

  getUplatniceZaClana(clanId: number) {
    this.http.get<{uplatnice: Uplatnica[], poruka: string}>('http://localhost:8080/api/uplate/' + clanId)
      .subscribe(response => {
        this.uplatniceUpdated.next(response.uplatnice);
      });
  }

}
