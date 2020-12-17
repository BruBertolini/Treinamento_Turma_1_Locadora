import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroFilmeService } from '../registro-filme.service';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroFilmesComponent implements OnInit {

  formularioLista: FormGroup

  constructor(private formBuilder: FormBuilder, private registroFilmeService: RegistroFilmeService) { }

  ngOnInit(): void {
    this.formularioLista = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      diretor: ['', [Validators.required]],
      anoLancamento: ['', Validators.required]
    })
  }

  salvar(){
    this.registroFilmeService.salvarFilme(this.formularioLista.getRawValue())
    .subscribe(resultado => {
      alert('Salvou com sucesso! :D');
      this.formularioLista.reset();
    },
    )
  }

}
