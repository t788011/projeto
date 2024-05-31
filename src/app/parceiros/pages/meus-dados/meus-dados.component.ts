import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-meus-dados',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './meus-dados.component.html',
  styleUrl: './meus-dados.component.css'
})
export class MeusDadosComponent {
  public menus = [
    {nome:'Acessos Parceiro'},
    {nome:'Início', path: "parceiros/pages/inicio"},
    {nome:'Editar Pictogramas', path: "parceiros/pages/editar-pictogramas"},
    {nome:'Meus dados', path: "parceiros/pages/meus-dados"}
  ]

}
