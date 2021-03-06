import {Uplatnica} from './uplatnica.model';
import {Stavke} from './stavke.model';
import {Clan} from './clan.model';

export class Potvrda {
  public potvrdaId: number;
  // public datumIzdavanja: string;
  public datumIzdavanja: Date;
  public uplatnica: Uplatnica;
  public clan: Clan;
  public stavke: Stavke[];

  constructor(potvrdaId: number, datumIzdavanja: Date, uplatnica: Uplatnica, clan: Clan, stavke: Stavke[]) {
    this.potvrdaId = potvrdaId;
    // this.datumIzdavanja = datumIzdavanja;
    this.datumIzdavanja = datumIzdavanja;
    this.uplatnica = uplatnica;
    this.clan = clan;
    this.stavke = stavke;
  }
}
