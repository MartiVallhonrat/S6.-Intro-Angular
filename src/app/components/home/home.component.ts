import { Component } from '@angular/core';
import * as data from "../../JSONdata/JSON1.json";

export interface Stage {
  txt: string;
  selected: boolean;
  img: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public showEscena: boolean = false;

  public showPage() {
    this.showEscena = true;
  }

  public changeImage() {

  }
}
