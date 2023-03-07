import { Component } from '@angular/core';
import * as data from "../../../JSONdata/JSON1.json";

export interface Stage {
  txt: string;
}


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  stageJSON: Stage[] = (data as any).default;
}
