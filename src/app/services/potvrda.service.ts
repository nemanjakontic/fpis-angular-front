import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Uplatnica} from '../modeli/uplatnica.model';
import {Potvrda} from '../modeli/potvrda.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotvrdaService {

  potvrde: Potvrda[];
  potvrdeUpdated = new Subject<Potvrda[]>();

  constructor(private http: HttpClient) { }

  getPotvrdeZaClana(clanId: number) {
    this.http.get<{potvrde: Potvrda[], poruka: string}>('http://localhost:8080/api/potvrde/' + clanId)
      .subscribe(response => {
        console.log(response);
        this.potvrde = response.potvrde;
        this.potvrdeUpdated.next(this.potvrde.slice());
      });
  }
}
