import {Clan} from './clan.model';

export class Uplatnica {
  public uplatnicaId: number;
  // public datumUplate: string;
  public datumUplate: Date;
  public iznos: number;
  public clan: Clan;
  public potvrdjena: boolean

  constructor(uplatnicaId: number, datumUplate: Date, iznos: number, clan: Clan, potvrdjena: boolean) {
    this.uplatnicaId = uplatnicaId;
    // this.datumUplate = datumUplate;
    this.datumUplate = datumUplate;
    this.iznos = iznos;
    this.clan = clan;
    this.potvrdjena = potvrdjena;
  }
}
