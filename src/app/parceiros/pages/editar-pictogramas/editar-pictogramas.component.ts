import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-editar-pictogramas',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './editar-pictogramas.component.html',
  styleUrl: './editar-pictogramas.component.css'
})
export class EditarPictogramasComponent {
  public menus = [
    {nome:'Acessos Parceiro'},
    {nome:'Início', path: "parceiros/pages/inicio"},
    {nome:'Editar Pictogramas', path: "parceiros/pages/editar-pictogramas"},
    {nome:'Meus dados', path: "parceiros/pages/meus-dados"}
  ]


}
