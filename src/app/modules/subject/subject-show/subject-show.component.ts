import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-subject-show',
    templateUrl: './subject-show.component.html',
    styleUrls: ['./subject-show.component.scss'],
    standalone: false
})
export class SubjectShowComponent {
  background: ThemePalette = undefined;
  
  links = [
    {url: 'oblasti', label: 'Oblasti'},
    {url: 'zadaci', label: 'Zadaci'},
    {url: 'testovi', label: 'Testovi'},
  ];
  activeLink: any;
  // activeLink = this.links[0].url;
  constructor(private route:Router, private activatedRoute: ActivatedRoute) {
    // console.log(activatedRoute.snapshot);
    // console.log(route.url);
    // console.log()
  }
  ngOnInit(){
    this.activeLink = this.links.filter(link => this.route.url.includes(link.url))[0];
    console.log(this.activeLink);

  }
  ngOnChanges(){
  }
  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
  
  addLink() {
    // this.links.push(`Link ${this.links.length + 1}`);
  }

}
