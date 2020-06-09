import {Component, Input, OnInit} from '@angular/core';
import {Clan} from '../../../modeli/clan.model';

@Component({
  selector: 'app-clan-item',
  templateUrl: './clan-item.component.html',
  styleUrls: ['./clan-item.component.css']
})
export class ClanItemComponent implements OnInit {

  @Input() clan: Clan;

  constructor() { }

  ngOnInit(): void {
  }

}
