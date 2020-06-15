import {Component, Input, OnInit} from '@angular/core';
import {Uplatnica} from '../../../modeli/uplatnica.model';
import {Potvrda} from '../../../modeli/potvrda.model';
import {UplatnicaService} from '../../../services/uplatnica.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PotvrdaService} from '../../../services/potvrda.service';

@Component({
  selector: 'app-potvrde-item',
  templateUrl: './potvrde-item.component.html',
  styleUrls: ['./potvrde-item.component.css']
})
export class PotvrdeItemComponent implements OnInit {

  @Input() public potvrda: Potvrda;

  constructor(private potvrdaService: PotvrdaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
