
import { Injectable } from '@angular/core';
import * as _json from '../../../assets/data/banner_data.json'
import { Banner } from '../interfaces/banner-data.interface';
@Injectable({
  providedIn: 'root'
})
export class GetJsonBannersService {
  banner_json :Banner = _json;

  constructor() { }

  getBannerJSON(){
    return this.banner_json;
  }
}