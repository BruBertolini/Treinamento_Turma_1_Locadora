import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'locadora';

  constructor(private router :Router){

  }

  irParaLista(){
    this.router.navigate(['']);
  }
  irParaCadastro(){
    this.router.navigate(['cadastro']);
  }
}
