export class Clanarina {
  public clanarinaId: number;
  public mesec: number;
  public godina: number;
  public iznos: number;
  public placena: boolean;

  constructor(clanarinaId: number, mesec: number, godina: number, iznos: number, placena: boolean) {
    this.clanarinaId = clanarinaId;
    this.mesec = mesec;
    this.godina = godina;
    this.iznos = iznos;
    this.placena = placena;
  }

}
