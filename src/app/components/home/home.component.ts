import { Component } from '@angular/core';

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
  public currentImage: any;


  public showPage() {
    this.showEscena = true;
  }

  public setImage(currentImage: any) {
    currentImage = currentImage.toString();
    this.currentImage = currentImage;
    //document.getElementById("img")?.style.backgroundImage = `url("../../../assets/img/${currentImage}.jpg")`
  }
}
