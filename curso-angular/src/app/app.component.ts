import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from './components/emitter/emitter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent, EmitterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Joaquim';

  title = 'curso-angular';
}
