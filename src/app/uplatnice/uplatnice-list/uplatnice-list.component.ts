import { Component, OnInit } from '@angular/core';
import {Uplatnica} from '../../modeli/uplatnica.model';
import {ActivatedRoute} from '@angular/router';
import {UplatnicaService} from '../../services/uplatnica.service';

@Component({
  selector: 'app-uplatnice-list',
  templateUrl: './uplatnice-list.component.html',
  styleUrls: ['./uplatnice-list.component.css']
})
export class UplatniceListComponent implements OnInit {

  uplatnice: Uplatnica[];
  clanId: number;

  constructor(private route: ActivatedRoute,
              private uplatnicaService: UplatnicaService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.clanId = params.id;
    });

    this.uplatnicaService.uplatniceUpdated
      .subscribe(uplatnice => {
        this.uplatnice = uplatnice;
    });
    this.uplatnicaService.getUplatniceZaClana(this.clanId);

  }

}
