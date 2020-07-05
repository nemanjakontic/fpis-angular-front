import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClanService} from '../../services/clan.service';
import {Clan} from '../../modeli/clan.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clan-novi',
  templateUrl: './clan-novi.component.html',
  styleUrls: ['./clan-novi.component.css']
})
export class ClanNoviComponent implements OnInit {

  editMode = false;
  poruka: string;
  stiglaPoruka = false;
  formClan: FormGroup;
  // danasnjiDatum = new Date();
  clan: Clan;
  clanId: number;
  visina: number[] = [];
  ansambli: string[] = ['PRVI', 'DRUGI', 'DECIJI'];

  constructor(private clanService: ClanService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    for (let i = 140; i < 210; i++) {
      this.visina.push(i);
    }

    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('clanId')) {
        this.editMode = true;
        this.clanId = Number.parseFloat(paramMap.get('clanId'));
        this.clanService.getOnlyClanById(this.clanId);
        this.clanService.clanUpdated.subscribe(clan => {
          this.clan = clan;
          this.formClan = new FormGroup({
            ime: new FormControl(this.clan.ime, Validators.required),
            prezime: new FormControl(this.clan.prezime, Validators.required),
            datumRodjenja: new FormControl(this.clan.datumRodjenja, Validators.required),
            pol: new FormControl(this.clan.pol, Validators.required),
            visina: new FormControl(this.clan.visina, Validators.required),
            ansambl: new FormControl(this.clan.ansambl, Validators.required),
            slika: new FormControl(this.clan.slika, Validators.required)
          });
        });
      } else {
        this.editMode = false;
      }
    });

    this.formClan = new FormGroup({
      ime: new FormControl(null, Validators.required),
      prezime: new FormControl(null, Validators.required),
      datumRodjenja: new FormControl(null, Validators.required),
      pol: new FormControl(null, Validators.required),
      visina: new FormControl(null, Validators.required),
      ansambl: new FormControl(null, Validators.required),
      slika: new FormControl(null, Validators.required)
    });

  }

  formSubmit() {
    console.log(this.formClan.value);
    // const aktivan = this.clan.aktivan;
    // this.clan = this.formClan.value;
    if (this.editMode) {
      const aktivan = this.clan.aktivan;
      this.clan = this.formClan.value;
      this.clan.aktivan = aktivan;
      this.clan.clanId = this.clanId;
      this.clanService.poruka.subscribe(poruka => {
        this.poruka = poruka;
        this.stiglaPoruka = true;
      });
      this.clanService.updateClan(this.clan);
    } else {
      // const aktivan = this.clan.aktivan;
      this.clan = this.formClan.value;
      this.clan.aktivan = true;
      this.clanService.poruka.subscribe(poruka => {
        this.poruka = poruka;
        this.stiglaPoruka = true;
      });
      this.clanService.addClan(this.clan);
    }
    this.formClan.reset();
  }
}
