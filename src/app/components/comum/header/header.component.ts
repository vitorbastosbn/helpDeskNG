import { CompartilhadoService } from './../../../services/compartilhado.service';
import { AbstractComponent } from './../abstract/abstract.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent extends AbstractComponent implements OnInit {

  constructor(
    private compatilhado: CompartilhadoService,
    private router: Router
  ) {
    super(CompartilhadoService.getInstance());
    this.compatilhado = CompartilhadoService.getInstance();
  }

  ngOnInit() {
  }

  private logout() {
    localStorage.clear();
    this.compatilhado.showTemplate.emit(false);
    this.router.navigate(['/login']);
  }

}
