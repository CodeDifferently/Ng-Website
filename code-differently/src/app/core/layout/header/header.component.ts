import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

let url: string;
let bg_copy: string;
const routes = [
  {route: '/home', copy: 'Introduce and Elevate Our Youth'},
  {route: '/about', copy:  'Some About Us copy'},
  {route: 'program', copy: ''}
]
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if(ev instanceof NavigationEnd){
        url = this.router.url;
        bg_copy = this.checkRoute(url);
        // document.getElementById('cover-container').style.background = " #2b2d34 url('../../../../assets/images"+url+"_banner.png') center";
        // document.getElementById('slogan').innerHTML = bg_copy; 

      }
    })

  }

  private checkRoute(url: string): string {
    for(let i = 0; i < routes.length - 1; i++){
      if(routes[i].copy === url) {
        return routes[i].copy;
      }
    }

    return routes[0].copy;
  }


}
