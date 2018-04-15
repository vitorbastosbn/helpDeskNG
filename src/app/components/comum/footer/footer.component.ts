import { CompartilhadoService } from './../../../services/compartilhado.service';
import { AbstractComponent } from './../abstract/abstract.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent extends AbstractComponent implements OnInit {

  constructor() {
    super(CompartilhadoService.getInstance());
  }
  ngOnInit() {
  }

}
