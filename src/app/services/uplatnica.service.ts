import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Uplatnica} from '../modeli/uplatnica.model';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UplatnicaService {

  uplatnice: Uplatnica[];
  uplatniceUpdated = new Subject<Uplatnica[]>();
  poruka = new Subject<string>();

  constructor(private http: HttpClient) { }

  getUplatniceZaClana(clanId: number) {
    this.http.get<{uplatnice: Uplatnica[], poruka: string}>('http://localhost:8080/api/uplate/' + clanId)
      .subscribe(response => {
        this.uplatnice = response.uplatnice;
        this.uplatniceUpdated.next(this.uplatnice.slice());
      });
  }

  getUplatnica(uplatnicaId: number) {
    return this.http
      .get<{uplatnica: Uplatnica, poruka: string}>
      ('http://localhost:8080/api/uplate/jedna/' + uplatnicaId);
  }

  addUplatnica(uplatnica: Uplatnica) {
    console.log(uplatnica);
    this.http
      .post<{uplatnica: Uplatnica, poruka: string}>
      ('http://localhost:8080/api/uplate', uplatnica)
      .subscribe(response => {
        console.log(response);
        this.poruka.next(response.poruka);
      });
  }

  deleteUplatnica(uplatnicaId: number) {
    this.http
      .delete<{poruka: string}>('http://localhost:8080/api/uplate/' + uplatnicaId)
      .subscribe(response => {
        const updatedUplatnice = this.uplatnice
          .filter(uplatnica => uplatnica.uplatnicaId !== uplatnicaId);
        this.uplatnice = updatedUplatnice;
        this.uplatniceUpdated.next(this.uplatnice.slice());
      });
  }

  updateUplatnica(uplatnica: Uplatnica) {
    console.log(uplatnica);
    return this.http
      .post<{uplatnica: Uplatnica, poruka: string}>
      ('http://localhost:8080/api/uplate/update', uplatnica)
      .pipe(map(response => {
        return response;
      }));
    // )
    //   .subscribe(response => {
    //     console.log(response);
    //   });
  }

  getUplatnice() {
    this.http.get<{uplatnice: Uplatnica[], poruka: string}>('http://localhost:8080/api/uplate')
      .subscribe(response => {
        console.log(response);
        this.uplatnice = response.uplatnice;
        this.uplatniceUpdated.next(this.uplatnice.slice());
      });
  }

}
