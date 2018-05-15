import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DialogService } from './../../../../dialog.service';

import { CompartilhadoService } from '../../../../services/compartilhado.service';
import { AbstractComponent } from '../../../comum/abstract/abstract.component';
import { TicketService } from './../../../../services/ticket.service';
import { ResponseApi } from './../../../../model/comum/response-api';
import { BaseFilter } from '../../../../model/comum/base-filter';
import { Ticket } from './../../../../model/entity/ticket.model';

@Component({
  selector: 'app-ticket-pesquisar',
  templateUrl: './ticket-pesquisar.component.html'
})
export class TicketPesquisarComponent extends AbstractComponent implements OnInit {

  designadoParaMim = true;
  private _filtro: BaseFilter<Ticket>;
  ticket = new Ticket();

  constructor(
    private ticketService: TicketService,
    private dialogService: DialogService,
    private router: Router,
    private compartilhado: CompartilhadoService
  ) {
    super();
    this.compartilhado = CompartilhadoService.getInstance();
  }

  ngOnInit() {
    this.isLoading = true;
    this.pesquisarTodos(this.filtro.pagina, this.filtro.registrosPorPagina);
    this.isLoading = false;
  }

  pesquisarTodos(pagina: number, registrosPorPagina: number) {
    this.ticketService.pesquisarTodos(pagina, registrosPorPagina).subscribe((responseApi: ResponseApi) => {
      this.filtro.registros = responseApi['data']['content'];
      this.filtro.paginas = new Array(responseApi['data']['totalPages']);
    }, error => {
      this.exibirMensagemDeErro(error['error']['errors'][0]);
    });
  }

  pesquisarPorFiltro(): void {
    this.filtro.pagina = 0;
    this.ticketService.pesquisarPorParametros(this.filtro.pagina, this.filtro.registrosPorPagina, this.designadoParaMim, this.ticket)
      .subscribe((responseApi: ResponseApi) => {
        this.ticket.titulo = this.ticket.titulo === 'vazio' ? '' : this.ticket.titulo;
        this.filtro.registros = responseApi['data']['content'];
        this.filtro.paginas = new Array(responseApi['data']['totalPages']);
      }, error => {
        this.exibirMensagemDeErro(AbstractComponent.NENHUM_REGISTRO_ENCONTRADO);
      });
  }

  excluir(id: string) {
    this.dialogService.confirm('Você confirma a exclusão deste registro?')
      .then((canDelete: boolean) => {
        if (canDelete) {
          this.ticketService.apagar(id).subscribe((responseApi: ResponseApi) => {
            super.exibirMensagemDeSucesso(AbstractComponent.OPERACAO_REALIZADA_COM_SUCESSO);
            this.pesquisarTodos(this.filtro.pagina, this.filtro.registrosPorPagina);
          }, error => {
            this.exibirMensagemDeErro(error['error']['errors'][0]);
          });
        }
      });
  }

  limpar(): void {
    this.limparMensagens();
    this.designadoParaMim = false;
    this.ticket = new Ticket();
    this.pesquisarTodos(this.filtro.pagina, this.filtro.registrosPorPagina);
  }

  alterar(id: string) {
    this.router.navigate(['/ticket/cadastrar', id]);
  }

  detalhar(id: string) {
    this.router.navigate(['/ticket/detalhar', id]);
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
   * @return {BaseFilter<Ticket>}
   */
  public get filtro(): BaseFilter<Ticket> {
    if (this._filtro == null) {
      this._filtro = new BaseFilter<Ticket>();
    }
    return this._filtro;
  }

  /**
   * Setter filtro
   * @param {BaseFilter<Ticket>} value
   */
  public set filtro(value: BaseFilter<Ticket>) {
    this._filtro = value;
  }


}
