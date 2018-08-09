import { CompartilhadoService } from './../../../services/compartilhado.service';
import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent extends AbstractComponent implements OnInit {

  public compartilhado: CompartilhadoService;

  constructor() {
    super();
    this.compartilhado = CompartilhadoService.getInstance();
  }

  ngOnInit() {
  }

  

}
