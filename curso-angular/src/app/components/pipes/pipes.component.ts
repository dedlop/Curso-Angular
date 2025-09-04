import { Component } from '@angular/core';
import { UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
  someText = "TESTANDO O PIPE OPERATOR";

  today = new Date();
}
