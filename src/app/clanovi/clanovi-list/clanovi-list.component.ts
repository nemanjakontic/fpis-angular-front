import { Component, OnInit } from '@angular/core';
import {Clan} from '../../modeli/clan.model';
import {ClanService} from '../../services/clan.service';

@Component({
  selector: 'app-clanovi-list',
  templateUrl: './clanovi-list.component.html',
  styleUrls: ['./clanovi-list.component.css']
})
export class ClanoviListComponent implements OnInit {

  clanovi: Clan[];

  constructor(private clanService: ClanService) { }

  ngOnInit(): void {
      // this.clanService.clanoviUpdated
      //   .subscribe(clanovi => {
      //     this.clanovi = clanovi;
      //   });
      this.clanovi = this.clanService.getClanovi();
  }

}
