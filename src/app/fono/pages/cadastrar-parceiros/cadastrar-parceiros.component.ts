import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-cadastrar-parceiros',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './cadastrar-parceiros.component.html',
  styleUrl: './cadastrar-parceiros.component.css'
})
export class CadastrarParceirosComponent {
  public menus = [
    {nome:'Acessos Fonoaudiólogo'},
    {nome:'Início', path: "fono/pages/inicio"},
    {nome:'Gerenciar Pictogramas', path: "fono/pages/gerenciar-pictogramas"},
    {nome:'Cadastrar Parceiros', path: "fono/pages/cadastrar-parceiros"},
    {nome:'Editar Parceiros', path: "fono/pages/editar-parceiros"},
    {nome:'Relatórios', path: "fono/pages/relatorios"},
    {nome:'Meus dados', path: "fono/pages/meus-dados"},
    {nome:'Dados de Pacientes', path: "fono/pages/dados-de-pacientes"},
    {nome:'Entrevistas', path: "fono/pages/entrevistas"}
  ]
}
