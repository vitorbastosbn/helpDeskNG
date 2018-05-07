import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CompartilhadoService } from '../../../../services/compartilhado.service';
import { AbstractComponent } from '../../../comum/abstract/abstract.component';
import { UsuarioService } from '../../../../services/usuario.service';
import { ResponseApi } from './../../../../model/comum/response-api';
import { Usuario } from '../../../../model/entity/usuario.model';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html'
})
export class UsuarioCadastroComponent extends AbstractComponent implements OnInit {

  @ViewChild('form')
  form: NgForm;

  public usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
  ) {
    super(CompartilhadoService.getInstance());
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
      this.usuario = new Usuario();
      const usuarioRet: Usuario = responseApi.data;
      this.form.resetForm();
      this.exibirMensagemDeSucesso(AbstractComponent.OPERACAO_REALIZADA_COM_SUCESSO);
    }, error => {
      if (error['error']['errors'] === undefined) {
        this.exibirMensagemDeErro(error['error']['message']);
      } else {
        this.exibirMensagemDeErro(error['error']['errors'][0]);
      }

      console.log(error);
    });
  }

}
