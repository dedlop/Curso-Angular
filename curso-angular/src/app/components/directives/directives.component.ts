import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgStyle, NgClass],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size: number = 30;
  color: string =  'blue';
  font: string = 'arial';

  classes = ['green-title', 'small-title']

  underline = 'underline-title'

}