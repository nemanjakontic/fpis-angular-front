import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Clan} from '../../modeli/clan.model';
import {ClanService} from '../../services/clan.service';
import {UplatnicaService} from '../../services/uplatnica.service';
import {Uplatnica} from '../../modeli/uplatnica.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-uplatnica-nova',
  templateUrl: './uplatnica-nova.component.html',
  styleUrls: ['./uplatnica-nova.component.css']
})
export class UplatnicaNovaComponent implements OnInit {

  formUplatnica: FormGroup;
  clanovi: Clan[] = [];
  editMode = false;
  uplatnica: Uplatnica;
  uplatnicaId: number;

  constructor(private clanService: ClanService,
              private uplatnicaService: UplatnicaService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clanService.clanoviUpdated
      .subscribe(clanovi => {
        this.clanovi = clanovi;
      });
    this.clanService.getClanovi();

    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('uplatnicaId')) {
        this.editMode = true;
        this.uplatnicaId = Number.parseFloat(paramMap.get('uplatnicaId'));
        console.log('UplatnicaId:');
        console.log(this.uplatnicaId);
        this.uplatnicaService.getUplatnica(this.uplatnicaId)
          .subscribe(response => {
            this.uplatnica = response.uplatnica;
            this.formUplatnica = new FormGroup({
              datumUplate: new FormControl(this.uplatnica.datumUplate),
              iznos: new FormControl(this.uplatnica.iznos),
              clan: new FormControl(this.uplatnica.clan)
            });
          });
      } else {
        this.editMode = false;
      }
    });
    this.formUplatnica = new FormGroup({
      datumUplate: new FormControl(null),
      iznos: new FormControl(null),
      clan: new FormControl(null)
    });
  }

  formSubmit() {
    // console.log(this.formUplatnica.value);
    const uplatnica = this.formUplatnica.value;
    if (this.editMode === true) {
      // radimo update
    } else {
      this.uplatnicaService.addUplatnica(uplatnica);
    }
    this.formUplatnica.reset();
  }

}
