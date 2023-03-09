import { Component, Output, EventEmitter } from '@angular/core';
import * as data from "../../../JSONdata/JSON1.json";

export interface Stage {
  txt: string;
  selected: boolean;
  img: string
}

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent {

  stageJSON: Stage[] = (data as any).default;

  public currentStage: number = 0;
  @Output() public imageEvent = new EventEmitter();
  public currentImage: any

  public changeImage() {
    const isSelected = (object: any) => object.selected == true;

    this.currentImage = this.stageJSON[this.stageJSON.findIndex(isSelected)].img 
    console.log(this.currentImage)
  }

  public prev(currentStage: number) {

    this.stageJSON[currentStage].selected = false;
  
    currentStage = currentStage - 1;
  
    this.stageJSON[currentStage].selected = true;

    this.currentStage = currentStage


    console.log(this.stageJSON)
    console.log(this.currentStage)

    this.changeImage();
  }

  public next(currentStage: number) {

    this.stageJSON[currentStage].selected = false;
  
    currentStage = currentStage + 1;
  
    this.stageJSON[currentStage].selected = true;

    this.currentStage = currentStage

    console.log(this.stageJSON)
    console.log(this.currentStage)

    this.changeImage();
  }

  
}
