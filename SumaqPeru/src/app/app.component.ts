import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ICarouselItem } from './shared/components/carousel/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from './data/constants/carousel.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private platformId: Object;
  title = 'SumaqPeru';
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.saveSessionId();
    }
  }

  saveSessionId(): void {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = this.generateUniqueId();
      sessionStorage.setItem('sessionId', sessionId);
    }
  }

  generateUniqueId(): string {
    return (Math.floor(Math.random() * 1_000_000_000_0) + 1_000_000_000).toString().slice(0, 10);
  }
}
