import { Component } from '@angular/core';
import * as data from "../../../JSONdata/JSON1.json";
import { this.changeImage } from "../home.component";

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

  public prev(currentStage: number) {

    this.stageJSON[currentStage].selected = false;
  
    currentStage = currentStage - 1;
  
    this.stageJSON[currentStage].selected = true;

    this.currentStage = currentStage

    changeImage()

    console.log(this.stageJSON)
    console.log(this.currentStage)
  }

  public next(currentStage: number) {

    this.stageJSON[currentStage].selected = false;
  
    currentStage = currentStage + 1;
  
    this.stageJSON[currentStage].selected = true;

    this.currentStage = currentStage

    console.log(this.stageJSON)
    console.log(this.currentStage)
  }
}
