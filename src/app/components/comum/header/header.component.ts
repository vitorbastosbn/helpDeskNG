import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompartilhadoService } from './../../../services/compartilhado.service';
import { AbstractComponent } from './../abstract/abstract.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent extends AbstractComponent implements OnInit {

  constructor(
    public compartilhado: CompartilhadoService,
    private router: Router
  ) {
    super();
    this.compartilhado = CompartilhadoService.getInstance();
  }

  ngOnInit() {
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    // this.compartilhado.showTemplate.emit(false);
  }

}
