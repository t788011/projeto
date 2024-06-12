import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleHeaderLogadoComponent } from '../../../components/simple-header-logado/simple-header-logado.component';

@Component({
  selector: 'app-cadastrar-socios',
  standalone: true,
  imports: [RouterModule, SimpleHeaderLogadoComponent],
  templateUrl: './cadastrar-socios.component.html',
  styleUrl: './cadastrar-socios.component.css'
})
export class CadastrarSociosComponent {
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
