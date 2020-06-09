export class Clan {
  public clanId: number;
  public ime: string;
  public prezime: string;
  public datumRodjenja: string;
  public slika: string;


  constructor(clanId: number, ime: string, prezime: string, datumRodjenja: string, slika: string) {
    this.clanId = clanId;
    this.ime = ime;
    this.prezime = prezime;
    this.datumRodjenja = datumRodjenja;
    this.slika = slika;
  }
}
