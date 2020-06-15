import {Uplatnica} from './uplatnica.model';
import {Stavke} from './stavke.model';

export class Potvrda {
  public potvrdaId: number;
  public datumIzdavanja: string;
  public uplatnica: Uplatnica;
  public stavke: Stavke[];

  constructor(potvrdaId: number, datumIzdavanja: string, uplatnica: Uplatnica, stavke: Stavke[]) {
    this.potvrdaId = potvrdaId;
    this.datumIzdavanja = datumIzdavanja;
    this.uplatnica = uplatnica;
    this.stavke = stavke;
  }
}
