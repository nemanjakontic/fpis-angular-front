import {Component, Input, OnInit} from '@angular/core';
import {Clan} from '../../../modeli/clan.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-clan-item',
  templateUrl: './clan-item.component.html',
  styleUrls: ['./clan-item.component.css']
})
export class ClanItemComponent implements OnInit {

  @Input() clan: Clan;

  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.datepipe.transform(this.clan.datumRodjenja, 'dd/MM/yyyy');
  }

}
