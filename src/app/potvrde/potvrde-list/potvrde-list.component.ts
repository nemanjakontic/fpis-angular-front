import { Component, OnInit } from '@angular/core';
import {Potvrda} from '../../modeli/potvrda.model';
import {ActivatedRoute} from '@angular/router';
import {PotvrdaService} from '../../services/potvrda.service';

@Component({
  selector: 'app-potvrde-list',
  templateUrl: './potvrde-list.component.html',
  styleUrls: ['./potvrde-list.component.css']
})
export class PotvrdeListComponent implements OnInit {

  potvrde: Potvrda[];
  clanId: number;

  constructor(private route: ActivatedRoute,
              private potvrdeService: PotvrdaService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.clanId = params.id;
      });

    this.potvrdeService.potvrdeUpdated
      .subscribe(potvrde => {
        this.potvrde = potvrde;
      });
    this.potvrdeService.getPotvrdeZaClana(this.clanId);

  }

}
