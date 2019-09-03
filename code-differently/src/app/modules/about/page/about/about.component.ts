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
    { name: 'Leon Hunter', title: 'Lead Instructor - Curriculum Developer',  imageLink: ''},
    { name: 'Leah Thomas', title: 'Jr Technical Instructor - Curriculum Developer',  imageLink: ''}
  ];
}
