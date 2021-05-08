import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../form/cadastro/cadastro.service';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa/pessoa.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pessoas: Pessoa[] = []
  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
    this.pessoas = this.cadastroService.getPessoas()
  }
  goToPessoa(nome: string): void {
    this.router.navigateByUrl(`/pessoa/${nome}`)
  }
}
