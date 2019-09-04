import { Component, } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  teamMembers = [
    { name: 'Stephanie Eldridge', title: 'CEO - Founder',  imageLink: ''},
    { name: 'Tariq Hook', title: 'CEO - Founder',  imageLink: ''},
    { name: 'Leon Hunter', title: 'Lead Instructor',  imageLink: ''},
    { name: 'Janelle Bowman', title: 'Marketing Director',  imageLink: ''},
    { name: 'Naz Jackson', title: 'Content Developer',  imageLink: ''},
    { name: 'Shree Realer', title: 'Communcations Specialist',  imageLink: ''}
  ];
}
