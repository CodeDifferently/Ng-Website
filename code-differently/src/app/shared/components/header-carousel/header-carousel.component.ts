import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'header-carousel',
 templateUrl: './header-carousel.component.html',
 styleUrls: ['./header-carousel.component.css']
})
export class HeaderCarouselComponent {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = [{link: '../../../assets/images/Hero-1.jpg'}, {link: '../../../assets/images/Hero-4.jpg'}, {link: '../../../assets/images/Hero-3.jpg'}];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
