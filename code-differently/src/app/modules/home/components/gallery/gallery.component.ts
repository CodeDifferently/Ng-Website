import { Component } from '@angular/core';
import * as Instafeed from 'instafeed.js';
import * as $ from 'jquery';

let feed = new Instafeed({
  get: 'user',
  userId: '8160177698',
  clientId: '7f178010c03d42beb61fb537e3d90a97',
  accessToken: '8160177698.1677ed0.06901bec829c4963bc09e1fa17f383ec',
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>',
  after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
   
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });
  },
  sortBy: 'most-recent',
  limit: 5
});
feed.run();
@Component({
    selector: 'home-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(
  ) {}

 
}