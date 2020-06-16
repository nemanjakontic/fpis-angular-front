import {Clanarina} from './clanarina.model';

export class Stavke {
  public id: number;
  public clanarina: Clanarina;

  constructor(id: number, clanarina: Clanarina) {
    this.id = id;
    this.clanarina = clanarina;
  }
}
