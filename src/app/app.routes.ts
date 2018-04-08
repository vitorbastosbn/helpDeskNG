import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPesquisarComponent } from './components/interno/usuario/usuario-pesquisar/usuario-pesquisar.component';
import { UsuarioCadastroComponent } from './components/interno/usuario/usuario-cadastro/usuario-cadastro.component';
import { LoginComponent } from './components/comum/security/login/login.component';
import { HomeComponent } from './components/comum/home/home.component';
import { AuthGuard } from './components/comum/security/auth.guard';

export const ROUTES: Routes = [
    { path : '', component: HomeComponent, canActivate: [AuthGuard]},
    { path : 'login', component: LoginComponent},
    { path : 'usuario/cadastrar', component: UsuarioCadastroComponent, canActivate: [AuthGuard]},
    { path : 'usuario/cadastrar/:id', component: UsuarioCadastroComponent, canActivate: [AuthGuard]},
    { path : 'usuario/pesquisar', component: UsuarioPesquisarComponent, canActivate: [AuthGuard]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
