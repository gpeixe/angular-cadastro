import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastroService } from '../form/cadastro/cadastro.service';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  pessoa: Pessoa = {
    nome: '',
    idade: 0,
    image: ''
  }
  nome: string = ''
  constructor(private cadastroService: CadastroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nome = params.get('nome') || ''
      const pessoa = this.cadastroService.getPessoas().find(pessoa => pessoa.nome == this.nome)
      if (pessoa) this.pessoa = pessoa
    });
  }

}
