import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SimpleHeaderLogadoComponent } from '../../../components/simple-header-logado/simple-header-logado.component';

@Component({
  selector: 'app-meus-dados',
  standalone: true,
  imports: [RouterModule, SimpleHeaderLogadoComponent],
  templateUrl: './meus-dados.component.html',
  styleUrl: './meus-dados.component.css'
})
export class MeusDadosComponent {
  public menus = [
    {nome:'[Acessos Financeiro]'},
    {nome:'Início', path:"financeiro/pages/inicio" },
    {nome:'Pagamentos', path:"financeiro/pages/pagamentos" },
    {nome:'Fonoaudiólogos', path:"financeiro/pages/fonoaudiologos"},
    {nome:'Pacientes', path:"financeiro/pages/pacientes"},
    {nome:'Meus dados', path:"financeiro/pages/meus-dados"},
    {nome:'Cadastrar Sócios', path:"financeiro/pages/cadastrar-socios"}
 ]

}
