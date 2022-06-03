import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [
  ]
})
export class CarouselComponentt {

  slides = [
    {'image': '../../../../assets/images/perfil1.png'},
    {'image': '../../../../assets/images/perfil2.png'},
    {'image': '../../../../assets/images/perfil3.png'}
  ];

}
