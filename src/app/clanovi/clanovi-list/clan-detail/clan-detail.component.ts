import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClanService} from '../../../services/clan.service';
import {Clan} from '../../../modeli/clan.model';

@Component({
  selector: 'app-clan-detail',
  templateUrl: './clan-detail.component.html',
  styleUrls: ['./clan-detail.component.css']
})
export class ClanDetailComponent implements OnInit {

  clanId: number;
  clan: Clan;
  poruka: string;
  stiglaPoruka: boolean;

  constructor(private route: ActivatedRoute,
              private clanService: ClanService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.clanId = params.id;
        this.clanService.getOnlyClanById(this.clanId);
        this.clanService.clanUpdated.subscribe(clan => {
          this.clan = clan;
        });
      });
  }

  izmeniAktivnost() {
    if (this.clan.aktivan) {
      this.clan.aktivan = false;
    } else {
      this.clan.aktivan = true;
    }
    this.clanService.poruka.subscribe(poruka => {
      this.poruka = poruka;
      this.stiglaPoruka = true;
    });
    this.clanService.clanUpdated.subscribe(clan => {
      this.clan = clan;
    });
    this.clanService.updateClan(this.clan);
  }
}
