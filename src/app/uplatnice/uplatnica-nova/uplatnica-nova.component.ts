import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  danasnjiDatum = new Date();
  poruka: string;
  stiglaPoruka = false;

  constructor(private clanService: ClanService,
              private uplatnicaService: UplatnicaService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clanService.clanoviUpdated
      .subscribe(clanovi => {
        this.clanovi = clanovi;
        console.log('postavka clanova');
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
            console.log('postavljanje clana');
            this.formUplatnica = new FormGroup({
              datumUplate: new FormControl(this.uplatnica.datumUplate, Validators.required),
              iznos: new FormControl(this.uplatnica.iznos, Validators.required),
              clan: new FormControl(this.uplatnica.clan, Validators.required)
            });
          });
      } else {
        this.editMode = false;
      }
    });
    this.formUplatnica = new FormGroup({
      datumUplate: new FormControl(new Date(), Validators.required),
      iznos: new FormControl(null, Validators.required),
      clan: new FormControl(null, Validators.required)
    });
  }

  formSubmit() {
    this.uplatnica = this.formUplatnica.value;
    this.uplatnica.potvrdjena = false;
    // this.uplatnica.datumUplate = new Date();
    console.log(this.uplatnica);
    if (this.editMode === true) {
      this.uplatnica.uplatnicaId = this.uplatnicaId;
      this.uplatnicaService.updateUplatnica(this.uplatnica).subscribe(response => console.log(response));
    } else {
      this.uplatnicaService.poruka.subscribe(poruka => {
        this.poruka = poruka;
        this.stiglaPoruka = true;
      });
      this.uplatnicaService.addUplatnica(this.uplatnica);
    }
    this.formUplatnica.reset();
  }

}
