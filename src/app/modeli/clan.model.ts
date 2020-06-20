import {Clanarina} from './clanarina.model';

export class Clan {
  public clanId: number;
  public ime: string;
  public prezime: string;
  // public datumRodjenja: string;
  public datumRodjenja: Date;
  public slika: string;
  public clanarine: Clanarina[];

  constructor(clanId: number, ime: string, prezime: string, datumRodjenja: Date, slika: string, clanarine: Clanarina[]) {
    this.clanId = clanId;
    this.ime = ime;
    this.prezime = prezime;
    // this.datumRodjenja = datumRodjenja;
    this.datumRodjenja = datumRodjenja;
    this.slika = slika;
    this.clanarine = clanarine;
  }
}
