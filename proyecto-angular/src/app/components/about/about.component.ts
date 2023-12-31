import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public title: string;
  public subtitle: string;
  public web: string;

  constructor () {
    this.title = 'Victor Robles';
    this.subtitle = 'Desarrollador web y Formador';
    this.web = 'victorroblesweb.es';
  }
}
