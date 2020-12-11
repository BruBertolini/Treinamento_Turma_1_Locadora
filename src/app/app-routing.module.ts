import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';

const routes: Routes = [
  { path: '', component: ListaFilmesComponent },
  { path: 'cadastro', component: CadastroFilmesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
