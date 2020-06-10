import {Component, Input, OnInit} from '@angular/core';
import {Uplatnica} from '../../../modeli/uplatnica.model';

@Component({
  selector: 'app-uplatnice-item',
  templateUrl: './uplatnice-item.component.html',
  styleUrls: ['./uplatnice-item.component.css']
})
export class UplatniceItemComponent implements OnInit {

  @Input() uplatnica: Uplatnica;

  constructor() { }

  ngOnInit(): void {
  }

}
