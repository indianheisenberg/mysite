import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('slideAboutMeImage', [
      transition(':enter', [
        style({transform: 'translatex(-100%)'}),
        animate('1000ms ease-in', style({transform: 'translatex(0%)'}))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({transform: 'translatex(-100%)'}))
      ])
    ]),
    trigger('slideAboutMeText', [
      transition(':enter', [
        style({transform: 'translatex(100%)'}),
        animate('1000ms ease-in', style({transform: 'translatex(0%)'}))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({transform: 'translatex(0%)'}))
      ])
    ])
  ]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
