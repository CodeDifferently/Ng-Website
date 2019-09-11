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
        //  document.getElementById('cover').style.background = " #2b2d34 url('../../../../assets/images/"+url+".jpg') center";
        document.getElementById('slogan').innerHTML = url; 
        
        console.log(url);
      }
    })

  }


}
