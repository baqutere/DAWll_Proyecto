import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './icarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent  implements OnInit{

  /*propiedades q vienen de un padre*/

  @Input() height =500;
  @Input() isFullScreen= false;
  @Input() items: ICarouselItem[] = [];

  /*a traves de esas propiedades se calculan ciertas cosas*/

  public finalHeight: string | number =0;
  public currentPosition =0;

constructor(){
  this.finalHeight = this.isFullScreen ? '100vh' :  `${this.height}px`;

}
ngOnInit(){
  this.items.map(( i, index) => {
    i.id = index;
    i.marginLeft=0;
  });
}

setCurrentPosition(position: number){
  this.currentPosition = position;
  this.items.find(i => i.id === 0)!.marginLeft = -100 * position;
}

setNext(){
  let finalPoncentage = 0;
  let nextPosition= this.currentPosition+1;
  if(nextPosition <= this.items.length - 1) {
    finalPoncentage = -100 * nextPosition;
  }else {
    nextPosition = 0;
  }
  this.items.find(i => i.id === 0)!.marginLeft = finalPoncentage;
  this.currentPosition = nextPosition;
}

setBack(){
  let finalPoncentage = 0;
  let backPosition = this.currentPosition -1;
  if(backPosition>=0){
    finalPoncentage = -100 * backPosition;
  }else {
    backPosition = this.items.length-1;
    finalPoncentage = -100* backPosition;
  }
  this.items.find(i => i.id === 0)!.marginLeft = finalPoncentage;
  this.currentPosition = backPosition;
}

}
