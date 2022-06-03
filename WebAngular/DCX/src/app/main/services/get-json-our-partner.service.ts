import { Injectable } from '@angular/core';
import * as _json from '../../../assets/data/our_partners.json'
import { OurPartners } from '../interfaces/our-partners.interface';
@Injectable({
  providedIn: 'root'
})
export class GetJsonOurPartnersService {
  our_partner_json :OurPartners = _json;

  constructor() { }

  getOurPartnersJSON(){
    return this.our_partner_json;
  }
}