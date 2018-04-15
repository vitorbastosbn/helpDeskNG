import { Component, OnInit } from '@angular/core';
import { CompartilhadoService } from '../../../services/compartilhado.service';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent extends AbstractComponent implements OnInit {

  constructor() {
    super(CompartilhadoService.getInstance());
  }

  ngOnInit() {
  }

}
