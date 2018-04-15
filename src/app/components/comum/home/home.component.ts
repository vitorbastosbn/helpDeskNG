import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractComponent } from './../abstract/abstract.component';
import { CompartilhadoService } from '../../../services/compartilhado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends AbstractComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    super(CompartilhadoService.getInstance());
  }

  ngOnInit() {
    if (!localStorage.getItem('token') && !localStorage.getItem('usuario')) {
      this.router.navigate(['/login']);
    }
  }

}
