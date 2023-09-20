import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  CEP: any;
  dadosRecebidos: any;

  constructor(private http: HttpClient) {}

  Consultar() {
    this.CEP = this.CEP.replace(/ /g, '+');

    this.http.get(`https://viacep.com.br/ws/${this.CEP}/json/`).subscribe(
      (data) => {
        this.dadosRecebidos = data;
      }
    );
  }

}
