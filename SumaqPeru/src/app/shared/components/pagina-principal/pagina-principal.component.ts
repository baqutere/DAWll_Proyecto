import { Component } from '@angular/core';
import { ICarouselItem } from '../carousel/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from 'app/data/constants/carousel.const';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

}
