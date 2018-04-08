import { Component, OnInit } from '@angular/core';
import { CompartilhadoService } from '../../../services/compartilhado.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(
    private compartilhado: CompartilhadoService
  ) {
    this.compartilhado = CompartilhadoService.getInstance();
   }

  ngOnInit() {
  }

}
