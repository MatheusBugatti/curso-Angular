import { Component } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  host:{
    role: 'button',
  },
})
export class HostElementsComponent {

}
