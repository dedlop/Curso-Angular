import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Isso é o que fornece *ngFor, *ngIf, etc.

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true, // ESSENCIAL
  imports: [CommonModule], // ESSENCIAL para *ngFor funcionar
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 5 },
    { name: 'Bob', type: 'Horse', age: 1 },
  ];

  animalDetails = ''

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

}
