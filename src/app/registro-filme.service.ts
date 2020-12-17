import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from './model/filme';

@Injectable(
 
)
export class RegistroFilmeService {

  baseUrl = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  salvarFilme(filme: Filme) {
    return this.http.post(this.baseUrl + '/add', filme);
  }
  
  listarFilmes(){
    return this.http.get(this.baseUrl+'/list');
  }
}
