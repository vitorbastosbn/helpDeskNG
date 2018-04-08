import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ticket } from './../../../../model/ticket.model';

@Component({
  selector: 'app-ticket-cadastrar',
  templateUrl: './ticket-cadastrar.component.html',
  styleUrls: ['./ticket-cadastrar.component.css']
})
export class TicketCadastrarComponent implements OnInit {

  @ViewChild('form')
  form: NgForm;

  constructor() { }

  ngOnInit() {
  }

}
