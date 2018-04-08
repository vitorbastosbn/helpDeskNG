import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCadastrarComponent } from './ticket-cadastrar.component';

describe('TicketCadastrarComponent', () => {
  let component: TicketCadastrarComponent;
  let fixture: ComponentFixture<TicketCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
