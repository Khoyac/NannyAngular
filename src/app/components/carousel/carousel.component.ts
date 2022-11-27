import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  carouselImages: any = [
    {
      image: '../../assets/bg/bg-digital.jpg',
      description: 'a'
    },
    {
      image: '../../assets/bg/bg-img-07-free-img-1.jpg',
      description: 'a'
    },
    {
      image: '../../assets/bg/jGlzr.png',
      description: 'a'
    },
    {
      image: '../../assets/img/fondonutricion.jpg',
      description: 'a'
    }
  ];

}
