import { Component } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.css'
})
export class ContentSectionComponent {
  contentItems = [
    {
      title: 'Ropa y Moda',
      subtitle: 'Explora nuestra colección',
      link: '/ropa-moda',
      image: 'assets/images/moda.jpg'
    },
    {
      title: 'Accesorios',
      subtitle: 'Complementa tu estilo',
      link: '/accesorios',
      image: 'assets/images/joyas.jpg'
    },
    {
      title: 'Hogar',
      subtitle: 'Decora tu espacio',
      link: '/hogar',
      image: 'assets/images/deco.jpg'
    },
    {
      title: 'Artesanías',
      subtitle: 'Arte hecho a mano',
      link: '/artesanias',
      image: 'assets/images/artesanias.jpg'
    }
  ];
}
