import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/form/cadastro/cadastro.component';
import { MenuComponent } from './components/menu/menu.component';
import { PessoaComponent } from './components/pessoa/pessoa.component'
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    MenuComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
