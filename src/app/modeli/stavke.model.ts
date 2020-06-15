export class Stavke {
  public stavkaId: number;
  public mesec: string;
  public godina: number;
  public iznos: number;

  constructor(stavkaId: number, mesec: string, godina: number, iznos: number) {
    this.stavkaId = stavkaId;
    this.mesec = mesec;
    this.godina = godina;
    this.iznos = iznos;
  }
}
