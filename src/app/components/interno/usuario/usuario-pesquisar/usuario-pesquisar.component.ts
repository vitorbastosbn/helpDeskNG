import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompartilhadoService } from '../../../../services/compartilhado.service';
import { AbstractComponent } from '../../../comum/abstract/abstract.component';
import { UsuarioService } from './../../../../services/usuario.service';
import { DialogService } from '../../../../dialog.service';
import { ResponseApi } from '../../../../model/comum/response-api';
import { BaseFilter } from '../../../../model/comum/base-filter';
import { Usuario } from '../../../../model/entity/usuario.model';

@Component({
  selector: 'app-usuario-pesquisar',
  templateUrl: './usuario-pesquisar.component.html'
})
export class UsuarioPesquisarComponent extends AbstractComponent implements OnInit {

  private _filtro: BaseFilter<Usuario>;

  constructor(
    private usuarioService: UsuarioService,
    private dialogService: DialogService,
    private router: Router
  ) {
    super(CompartilhadoService.getInstance());
  }

  ngOnInit() {
    this.pesquisarTodos(this.filtro.pagina, this.filtro.registrosPorPagina);
  }

  pesquisarTodos(pagina: number, registrosPorPagina: number) {
    this.usuarioService.pesquisarTodos(pagina, registrosPorPagina).subscribe((responseApi: ResponseApi) => {
      this.filtro.registros = responseApi['data']['content'];
      this.filtro.paginas = new Array(responseApi['data']['totalPages']);
    }, error => {
      console.log(error);
      super.exibirMensagemDeErro(error['error']['errors'][0]);
    });
  }

  alterar(id: string) {
    this.router.navigate(['/usuario/cadastrar', id]);
  }

  apagar(id: string) {
    this.dialogService.confirm('Você confirma a exclusão deste registro?')
      .then((canDelete: boolean) => {
        if (canDelete) {
          this.usuarioService.apagar(id).subscribe((responseApi: ResponseApi) => {
            super.exibirMensagemDeSucesso(AbstractComponent.OPERACAO_REALIZADA_COM_SUCESSO);
            this.pesquisarTodos(this.filtro.pagina, this.filtro.registrosPorPagina);
          }, error => {
            super.exibirMensagemDeErro(error['error']['errors'][0]);
          });
        }
      });
  }

  setProximaPagina(event: any) {
    event.preventDefault();
    if (this.filtro.pagina + 1 < this.filtro.paginas.length) {
      this.filtro.pagina = this.filtro.pagina + 1;
      this.pesquisarTodos(this.filtro.pagina, this.filtro.registrosPorPagina);
    }
  }

  setPaginaAnterior(event: any) {
    event.preventDefault();
    if (this.filtro.pagina > 0) {
      this.filtro.pagina = this.filtro.pagina - 1;
      this.pesquisarTodos(this.filtro.pagina, this.filtro.registrosPorPagina);
    }
  }

  setPagina(i, event: any) {
    event.preventDefault();
    if (i >= 1) {
      this.filtro.pagina = i;
      this.pesquisarTodos(this.filtro.pagina, this.filtro.registrosPorPagina);
    } else {
      this.filtro.pagina = 0;
      this.pesquisarTodos(this.filtro.pagina, this.filtro.registrosPorPagina);
    }
  }

  // GETTERS AND SETTERS

  /**
   * Getter filtro
   * @return {BaseFilter<Usuario>}
   */
  public get filtro(): BaseFilter<Usuario> {
    if (this._filtro == null) {
      this._filtro = new BaseFilter<Usuario>();
    }
    return this._filtro;
  }

  /**
   * Setter filtro
   * @param {BaseFilter<Usuario>} value
   */
  public set filtro(value: BaseFilter<Usuario>) {
    this._filtro = value;
  }


}
