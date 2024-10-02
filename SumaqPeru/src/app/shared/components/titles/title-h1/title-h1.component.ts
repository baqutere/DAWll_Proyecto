import { Component, Input
  , OnInit } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrl: './title-h1.component.css'
})
export class TitleH1Component implements OnInit {
@Input() text= '';
type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';
constructor(){}

ngOnInit(){}
}
