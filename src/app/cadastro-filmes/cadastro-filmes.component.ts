import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroFilmesComponent implements OnInit {

  formularioLista: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formularioLista = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      diretor: ['', [Validators.required]],
      anoLancamento: ['', Validators.required]
    })
  }

  salvar(){
    console.log("Salvou");
  }

}
