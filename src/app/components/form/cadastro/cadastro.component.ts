import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../pessoa/pessoa.model';
import { CadastroService } from './cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  pessoa: Pessoa = {
    nome: '',
    idade: 0,
    image: ''
  }
  pessoas: Pessoa[] = []
  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.pessoas = this.cadastroService.getPessoas()
  }

  addPessoa(): void {             
    if(!this.pessoa.nome) alert('Informe um nome para cadastrar!')
    else if (this.pessoas.find(pessoa => pessoa.nome == this.pessoa.nome) ) alert('Pessoa já cadastrada!')
    else{
      this.cadastroService.cadastrarPessoa(this.pessoa)
      alert("Pessoa cadastrada com sucesso!")
      this.pessoa.nome = ''
      this.pessoa.idade = 0
      this.pessoa.image = ''
    }
  }
}
