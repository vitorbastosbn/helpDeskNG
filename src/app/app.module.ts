import { DialogService } from './dialog.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { CompartilhadoService } from './services/compartilhado.service';
import { AuthInterceptor } from './components/comum/security/auth.interceptor';
import { FooterComponent } from './components/comum/footer/footer.component';
import { HeaderComponent } from './components/comum/header/header.component';
import { UsuarioService } from './services/usuario.service';
import { LoginComponent } from './components/comum/security/login/login.component';
import { MenuComponent } from './components/comum/menu/menu.component';
import { HomeComponent } from './components/comum/home/home.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './components/comum/security/auth.guard';
import { routes } from './app.routes';
import { UsuarioCadastroComponent } from './components/interno/usuario/usuario-cadastro/usuario-cadastro.component';
import { AbstractComponent } from './components/comum/abstract/abstract.component';
import { UsuarioPesquisarComponent } from './components/interno/usuario/usuario-pesquisar/usuario-pesquisar.component';
import { TicketCadastrarComponent } from './components/interno/ticket/ticket-cadastrar/ticket-cadastrar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UsuarioCadastroComponent,
    AbstractComponent,
    UsuarioPesquisarComponent,
    TicketCadastrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [
    UsuarioService,
    CompartilhadoService,
    DialogService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
