import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Isso é o que fornece *ngFor, *ngIf, etc.

import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true, // ESSENCIAL
  imports: [CommonModule], // ESSENCIAL para *ngFor funcionar
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [];

  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
