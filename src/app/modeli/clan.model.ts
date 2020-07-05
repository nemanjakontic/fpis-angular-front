import {Clanarina} from './clanarina.model';

export class Clan {
  public clanId: number;
  public ime: string;
  public prezime: string;
  // public datumRodjenja: string;
  public datumRodjenja: Date;
  public pol: string;
  public visina: number;
  public ansambl: string;
  public slika: string;
  public clanarine: Clanarina[];
  public aktivan: boolean;

  constructor(clanId: number, ime: string, prezime: string, datumRodjenja: Date, pol: string, visina: number, ansambl: string, slika: string, clanarine: Clanarina[], aktivan: boolean) {
    this.clanId = clanId;
    this.ime = ime;
    this.prezime = prezime;
    this.datumRodjenja = datumRodjenja;
    this.pol = pol;
    this.visina = visina;
    this.ansambl = ansambl;
    this.slika = slika;
    this.clanarine = clanarine;
    this.aktivan = aktivan;
  }
}
