import { Injectable } from '@angular/core';
import { Pessoa } from '../../pessoa/pessoa.model';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }
  pessoas: Pessoa[] = []

  cadastrarPessoa(pessoa: Pessoa): void {
    if (pessoa.image.trim().length == 0) pessoa.image = 'https://img-21.ccm2.net/nmbYa2_w_92LUhD4Od-PLYO9Y5o=/500x/8b76db347fb2460982edafd1f17f6c34/ccm-faq/incognito.jpeg'
    this.pessoas.push({ nome: pessoa.nome, idade: pessoa.idade, image: pessoa.image })
    console.log(this.pessoas)
  }

  getPessoas(): Pessoa[] {
    return this.pessoas
  }

}
