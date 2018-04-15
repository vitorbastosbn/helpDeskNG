import { UsuarioAtual } from './../../../../model/usuarioAtual.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompartilhadoService } from '../../../../services/compartilhado.service';
import { UsuarioService } from './../../../../services/usuario.service';
import { Usuario } from '../../../../model/usuario.model';
import { AbstractComponent } from '../../abstract/abstract.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends AbstractComponent implements OnInit {

  private usuario = new Usuario('', '', '', '');

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private compatilhado: CompartilhadoService
  ) {
    super(CompartilhadoService.getInstance());
    this.compatilhado = CompartilhadoService.getInstance();
  }

  ngOnInit() {
  }

  login() {
    this.limparMensagens();
    this.usuarioService.login(this.usuario).subscribe((usuarioAutenticacao: UsuarioAtual) => {
      localStorage.setItem('token', usuarioAutenticacao.token);
      localStorage.setItem('usuario', usuarioAutenticacao.usuario.email);
      localStorage.setItem('perfil', usuarioAutenticacao.usuario.perfil);
      this.compatilhado.showTemplate.emit(true);
      this.router.navigate(['/']);
    }, error => {
      localStorage.clear();
      this.compatilhado.showTemplate.emit(false);
      if (error['error']['errors'] === undefined) {
        super.exibirMensagemDeErro('Falha ao se comunicar com o servidor');
      } else {
        super.exibirMensagemDeErro(error['error']['errors'][0]);
      }
    });
  }

  cancelarLogin() {
    this.mensagem = null;
    this.usuario = new Usuario('', '', '', '');
    this.router.navigate(['/login']);
  }

}
