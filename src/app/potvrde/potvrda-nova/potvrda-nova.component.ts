import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Clan} from '../../modeli/clan.model';
import {Uplatnica} from '../../modeli/uplatnica.model';
import {Potvrda} from '../../modeli/potvrda.model';
import {ClanService} from '../../services/clan.service';
import {UplatnicaService} from '../../services/uplatnica.service';
import {ActivatedRoute} from '@angular/router';
import {PotvrdaService} from '../../services/potvrda.service';
import {Stavke} from '../../modeli/stavke.model';
import {Clanarina} from '../../modeli/clanarina.model';
import {ClanarinaService} from '../../services/clanarina.service';

@Component({
  selector: 'app-potvrda-nova',
  templateUrl: './potvrda-nova.component.html',
  styleUrls: ['./potvrda-nova.component.css']
})
export class PotvrdaNovaComponent implements OnInit {

  formPotvrda: FormGroup;
  uplatnice: Uplatnica[] = [];
  editMode = false;
  potvrda: Potvrda;
  potvrdaId: number;
  prikaziStavke = false;
  stavke: Stavke[] = [];
  uplatnica: Uplatnica;
  poruka: string;
  stiglaPoruka = false;
  uplatnicaZaSlanje: Uplatnica;
  potvrde: Potvrda[] = [];

  constructor(private uplatnicaService: UplatnicaService,
              private potvrdaService: PotvrdaService,
              private route: ActivatedRoute,
              private clanarinaService: ClanarinaService,
              private clanService: ClanService) {
  }

  ngOnInit(): void {
    this.uplatnicaService.uplatniceUpdated
      .subscribe(uplatnice => {
        this.uplatnice = uplatnice;
        console.log('postavka uplatnica');
      });
    this.uplatnicaService.getUplatnice();

    this.formPotvrda = new FormGroup({
      datumPotvrde: new FormControl(new Date(), Validators.required),
      uplatnica: new FormControl(null, Validators.required)
    });
  }

  formSubmit() {
    console.log(this.formPotvrda.value);
    this.potvrda = new Potvrda
    (null, this.formPotvrda.value.datumPotvrde,
      this.uplatnicaZaSlanje, this.formPotvrda.value.uplatnica.clan,
      this.stavke);
    console.log(this.potvrda);
    this.potvrdaService.poruka.subscribe(poruka => {
      this.poruka = poruka;
      this.stiglaPoruka = true;
    });
    this.potvrdaService.dodajPotvrdu(this.potvrda);
    this.prikaziStavke = false;
    this.formPotvrda.reset();
  }

  kreirajStavke(uplata: any) {
    this.stavke = [];
    console.log(uplata.value);
    // let uplatnica: Uplatnica = null;
    for (const upl of this.uplatnice) {
      if (upl.uplatnicaId === Number.parseFloat(uplata.value)) {
        this.uplatnicaZaSlanje = upl;
      }
    }
    console.log('kliknuo');
    const brojStavki = this.uplatnicaZaSlanje.iznos / 300;
    // idemo do baze i vidimo za odredjenog clana koje sve clanarine on ima neplacene
    this.clanService.getClan(this.uplatnicaZaSlanje.clan)
      .subscribe(clanarine => {
        console.log(clanarine);
        // izdvajanje neplacenih od placenih
        const neplaceneClanarine = clanarine.filter(clanarina => clanarina.placena === false);
        console.log(neplaceneClanarine);
        for (let j = 0; j < neplaceneClanarine.length && j < brojStavki; j++) {
          const stavka: Stavke = new Stavke(null, neplaceneClanarine[j]);
          this.stavke.push(stavka);
        }
      });
    this.prikaziStavke = true;
  }
}
