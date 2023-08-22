import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.css']
})
export class SpinerComponent {
  color: ThemePalette = 'warn';
 

}
