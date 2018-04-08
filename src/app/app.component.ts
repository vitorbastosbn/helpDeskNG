import { Component } from '@angular/core';

import { CompartilhadoService } from './services/compartilhado.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showTemplate = false;
  public compartilhado: CompartilhadoService;

  constructor() {
    this.compartilhado = CompartilhadoService.getInstance();
  }

  ngOnInit() {
    this.compartilhado.showTemplate.subscribe(show => this.showTemplate = show);
  }

  showContentWrapper() {
    return {
      'content-wrapper': this.compartilhado.isUsuarioLogado()
    };
  }
}
