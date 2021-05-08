import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/form/cadastro/cadastro.component';
import { MenuComponent } from './components/menu/menu.component';


import { PessoaComponent } from './components/pessoa/pessoa.component';

const routes: Routes = [{
  path: 'pessoa/:nome',
  component: PessoaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
