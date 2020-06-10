import {Component, Input, OnInit} from '@angular/core';
import {Uplatnica} from '../../../modeli/uplatnica.model';
import {UplatnicaService} from '../../../services/uplatnica.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-uplatnice-item',
  templateUrl: './uplatnice-item.component.html',
  styleUrls: ['./uplatnice-item.component.css']
})
export class UplatniceItemComponent implements OnInit {

  @Input() uplatnica: Uplatnica;

  constructor(private uplatnicaService: UplatnicaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  obrisiUplatnicu() {
    this.uplatnicaService.deleteUplatnica(this.uplatnica.uplatnicaId);
  }

  izmeniUplatnicu() {
    this.router.navigate(['edit', this.uplatnica.uplatnicaId], {relativeTo: this.route});
  }
}
