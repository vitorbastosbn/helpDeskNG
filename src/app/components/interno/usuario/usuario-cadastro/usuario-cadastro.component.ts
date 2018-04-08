import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CompartilhadoService } from '../../../../services/compartilhado.service';
import { AbstractComponent } from '../../../comum/abstract/abstract.component';
import { UsuarioService } from '../../../../services/usuario.service';
import { ResponseApi } from './../../../../model/response-api';
import { Usuario } from '../../../../model/usuario.model';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html'
})
export class UsuarioCadastroComponent extends AbstractComponent implements OnInit {

  @ViewChild('form')
  form: NgForm;

  private usuario = new Usuario('', '', '', '');

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private compartilhado: CompartilhadoService
  ) {
    super();
    this.compartilhado = CompartilhadoService.getInstance();
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id !== undefined) {
      this.pesquisarPorId(id);
    }
  }

  pesquisarPorId(id: string) {
    this.usuarioService.pesquisarPorId(id).subscribe((responseApi: ResponseApi) => {
      console.log(this.usuario);
      this.usuario = responseApi.data;
      this.usuario.senha = '';
    }, erro => {
      super.exibirMensagemDeAlerta(AbstractComponent.NENHUM_REGISTRO_ENCONTRADO);
    });
  }

  cadastrar() {
    this.usuarioService.criarOuAtualizar(this.usuario).subscribe((responseApi: ResponseApi) => {
      this.usuario = new Usuario('', '', '', '');
      const usuarioRet: Usuario = responseApi.data;
      this.form.resetForm();
      super.exibirMensagemDeSucesso(AbstractComponent.OPERACAO_REALIZADA_COM_SUCESSO);
    }, error => {
      super.exibirMensagemDeErro(error['error']['errors'][0]);
    });
  }

}
