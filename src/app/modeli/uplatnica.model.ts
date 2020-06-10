import {Clan} from './clan.model';

export class Uplatnica {
  public uplatnicaId: number;
  public datumUplate: string;
  public iznos: number;
  public clan: Clan;

  constructor(uplatnicaId: number, datumUplate: string, iznos: number, clan: Clan) {
    this.uplatnicaId = uplatnicaId;
    this.datumUplate = datumUplate;
    this.iznos = iznos;
    this.clan = clan;
  }
}
