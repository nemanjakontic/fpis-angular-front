import { Component, OnInit } from '@angular/core';
import {ClanService} from '../../services/clan.service';
import {ActivatedRoute} from '@angular/router';
import {Clan} from '../../modeli/clan.model';
import {Clanarina} from '../../modeli/clanarina.model';

@Component({
  selector: 'app-clanarine-list',
  templateUrl: './clanarine-list.component.html',
  styleUrls: ['./clanarine-list.component.css']
})
export class ClanarineListComponent implements OnInit {

  clanId: number;
  clanarine: Clanarina[];
  ukupno = 0;
  ukupnoZaPlacanje = 0;
  ukupnoPlaceno = 0;

  constructor(private clanService: ClanService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.clanId = params.id;
        this.clanService.getClanById(this.clanId)
          .subscribe(clanarine => {
            console.log(clanarine);
            this.clanarine = clanarine;
            for (const clanarina of clanarine) {
              if (clanarina.placena) {
                this.ukupnoPlaceno += clanarina.iznos;
                this.ukupno += clanarina.iznos;
              } else {
                this.ukupnoZaPlacanje += clanarina.iznos;
                this.ukupno += clanarina.iznos;
              }
            }
          });
      });
  }

}
