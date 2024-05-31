import { Component } from '@angular/core';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastrar-socios',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './cadastrar-socios.component.html',
  styleUrl: './cadastrar-socios.component.css'
})
export class CadastrarSociosComponent {
  public menus = [
    {nome:'Acessos Financeiro'},
    {nome:'Início', path:"financeiro/pages/inicio" },
    {nome:'Pagamentos', path:"financeiro/pages/pagamentos" },
    {nome:'Fonoaudiólogos', path:"financeiro/pages/fonoaudiologos"},
    {nome:'Pacientes', path:"financeiro/pages/pacientes"},
    {nome:'Meus dados', path:"financeiro/pages/meus-dados"},
    {nome:'Cadastrar Sócios', path:"financeiro/pages/cadastrar-socios"}
 ]

}
