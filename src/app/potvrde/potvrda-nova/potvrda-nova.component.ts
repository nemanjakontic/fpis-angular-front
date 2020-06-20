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
      this.formPotvrda.value.uplatnica, this.formPotvrda.value.uplatnica.clan,
      this.stavke);
    // this.potvrda.uplatnica = this.formPotvrda.value.uplatnica;
    // this.potvrda.datumIzdavanja = this.formPotvrda.value.datumPotvrde;
    // this.potvrda.stavke = this.stavke;
    console.log(this.potvrda);
    this.potvrdaService.dodajPotvrdu(this.potvrda);
  }

  kreirajStavke(uplatnica: Uplatnica) {
    console.log(uplatnica);
    console.log('kliknuo');
    const brojStavki = uplatnica.iznos / 300;
    // idemo do baze i vidimo za odredjenog clana koje sve clanarine on ima neplacene
    this.clanService.getClan(uplatnica.clan)
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
