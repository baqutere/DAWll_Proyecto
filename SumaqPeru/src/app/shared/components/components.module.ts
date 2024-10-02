// layout.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule aquí
import { CarouselComponent } from './carousel/carousel.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TitleH1Component } from './titles/title-h1/title-h1.component';



@NgModule({
  declarations: [
   CarouselComponent,
   ContentSectionComponent,
   FooterComponent,
   NavBarComponent,
   PaginaPrincipalComponent,
   TitleH1Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CarouselComponent,
    ContentSectionComponent,
    FooterComponent,
    NavBarComponent,
    PaginaPrincipalComponent,
    TitleH1Component
  ]
})
export class ComponentModule {

 }
