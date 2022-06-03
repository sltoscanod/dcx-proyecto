import { Component, Input } from '@angular/core';
import { GetJsonBannersService } from '../../services/get-json-banners.service';
import { Banner } from '../../interfaces/banner-data.interface';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styles: [`
    .bg-img{background-size:cover}
    .bg-white{background-color:white;
              background-size:cover;
              opacity:75%;
              border-radius:6px;}
    img{width:50%;
        max-width:500px;}
    .txt{font-size:25px;};
    .title{
      font-size:30px;
    }
    `

  ]
})
export class BannerImgTextComponent {



  @Input() id: number = 0;
  banner: Banner = this.service.getBannerJSON();;
  _img: string = this.banner.data[this.id].background_img
  _url: String = '';


  constructor(private service: GetJsonBannersService) {

  }


  temp(_id: number) {
    this._url = 'url('
    return this._url.concat(this.banner.data[_id].background_img + ')');
  }




}


