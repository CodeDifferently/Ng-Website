import { Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/programs', title: 'Programs' },
    { link: '/contact', title: 'Contact Us'}
  ];

  constructor(  ) {}


}
