import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-evolucao',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './evolucao.component.html',
  styleUrl: './evolucao.component.css'
})
export class EvolucaoComponent {
  public menus = [
    {nome:'Acessos Paciente'},
    {nome:'Início', path: "pacientes/pages/inicio"},
    {nome:'Iniciar Comunicação', path: "pacientes/pages/iniciar-comunicacao"},
    {nome:'Evolução', path: "pacientes/pages/evolucao"},
    {nome:'Meus de Acessos', path: "pacientes/pages/meus-acessos"},
    {nome:'Meus dados', path: "pacientes/pages/meus-dados"}
 ]

}
