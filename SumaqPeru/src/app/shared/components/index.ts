//import components

import { CarouselComponent } from "./carousel/carousel.component";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";
import { FooterComponent } from './footer/footer.component';
import {ContentSectionComponent} from './content-section/content-section.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';



export const components: any[] =[
  TitleH1Component,
  CarouselComponent,
  FooterComponent,
  ContentSectionComponent,
  NavBarComponent
 ];



export * from "./carousel/carousel.component";
export * from "./titles/title-h1/title-h1.component";
export * from './footer/footer.component';
export * from './content-section/content-section.component';
export * from './nav-bar/nav-bar.component';
