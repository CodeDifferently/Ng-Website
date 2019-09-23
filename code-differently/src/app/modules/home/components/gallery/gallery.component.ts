import { Component } from '@angular/core';
import * as Instafeed from 'instafeed.js';


let feed = new Instafeed({
  get: 'user',
  userId: '8160177698',
  clientId: '7f178010c03d42beb61fb537e3d90a97',
  accessToken: '8160177698.1677ed0.06901bec829c4963bc09e1fa17f383ec',
  resolution: 'standard_resolution',
  template: '<style>.col-xs-12 {background: url("../../../../../assets/images/2-color-grey-revised.png");'+
  'padding-right: 0px;background-size: 20%;background-repeat: no-repeat;background-position: bottom right;}'+
  ' .img-featured-container { overflow: hidden; position: relative; } .img-featured-container img { width: 100%;'+
  ' /* padding: 10px; */ } .img-featured-container '+
  '.img-backdrop { background:radial-gradient(ellipse at center, rgba(255,132,0,0.35) 0%, rgba(129,130,133,0.7) 100%);  margin: 0; padding: 0; width: 100%; height: 100%; position: absolute; z-index: 1; opacity: 0; transition: all 0.3s ease; } .img-featured-container:hover > .img-backdrop { opacity: 1; } /* center text horizontally and vertically on image hover */ .img-featured-container .description-container { color: #fff; font-size: 16px; line-height: 1.2; padding: 0 30px; text-align: center; line-height: 20px; width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); transform-style: preserve-3d; z-index: 2; opacity: 0; transition: all .2s ease; } .img-featured-container .description-container .fa-instagram { font-size: 40px; } .img-featured-container .description-container p { font-weight: 300; margin-bottom: 0; } .img-featured-container:hover .description-container { opacity: 1; } .img-featured-container .description-container .caption { display: none; margin-bottom: 10px; } .img-featured-container .description-container .likes, .img-featured-container .description-container .comments { margin: 0 5px; } /* load more button */ #btn-instafeed-load { color: #fff; background: #26a3ff; font-size: 16px; margin: 20px auto; padding: 8px 40px; display: block; border: none; } /* media queries */ @media screen and (min-width:768px) { .img-featured-container .description-container .caption { display: block; } }</style>'
    +'<div class="col-xs-12 col-sm-6 col-md-4"  style="padding-top: 20px;"><a href="{{image}}"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  sortBy: 'most-recent',
  limit: 12
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