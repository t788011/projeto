import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-fonoaudiologos',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './fonoaudiologos.component.html',
  styleUrl: './fonoaudiologos.component.css'
})
export class FonoaudiologosComponent {
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
