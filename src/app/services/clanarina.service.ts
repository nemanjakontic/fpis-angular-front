import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Clan} from '../modeli/clan.model';

@Injectable({
  providedIn: 'root'
})
export class ClanarinaService {

  constructor(private http: HttpClient) { }

}
