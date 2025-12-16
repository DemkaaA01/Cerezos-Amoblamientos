import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productos = [
    {
      nombre: 'Cocinas',
      img: '/CocinaHome.jpg',
      link: '/productos/cocinas'
    },
    {
      nombre: 'Placards',
      img: '/PlacardHome.jpg',
      link: '/productos/placards'
    },
    {
      nombre: 'Escritorios',
      img: '/EscritorioHome.jpg',
      link: '/productos/escritorios'
    }
  ];
}
