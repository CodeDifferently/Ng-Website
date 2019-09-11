import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

let url: string;

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
         console.log(url);
      }
    })

  }


}
