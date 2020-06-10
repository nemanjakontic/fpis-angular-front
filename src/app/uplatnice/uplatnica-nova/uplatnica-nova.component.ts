import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Clan} from '../../modeli/clan.model';
import {ClanService} from '../../services/clan.service';

@Component({
  selector: 'app-uplatnica-nova',
  templateUrl: './uplatnica-nova.component.html',
  styleUrls: ['./uplatnica-nova.component.css']
})
export class UplatnicaNovaComponent implements OnInit {

  formUplatnica: FormGroup;
  clanovi: Clan[] = [];

  constructor(private clanService: ClanService) { }

  ngOnInit(): void {
    this.clanService.clanoviUpdated
      .subscribe(clanovi => {
        this.clanovi = clanovi;
      });
    this.clanService.getClanovi();

    this.formUplatnica = new FormGroup({
      datum: new FormControl(null),
      iznos: new FormControl(null),
      clan: new FormControl(null)
    });
  }

  formSubmit() {
    console.log(this.formUplatnica.value);
  }

}
