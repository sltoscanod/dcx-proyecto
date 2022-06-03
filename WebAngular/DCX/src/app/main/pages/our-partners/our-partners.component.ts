import { Component } from '@angular/core';
import { OurPartners } from '../../interfaces/our-partners.interface';
import { GetJsonOurPartnersService } from '../../services/get-json-our-partner.service';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styles: [
  ]
})
export class OurPartnersComponent {

  constructor(private getService : GetJsonOurPartnersService) { }

  partners:OurPartners = this.getService.getOurPartnersJSON()
}
