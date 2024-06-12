import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleHeaderLogadoComponent } from '../../../components/simple-header-logado/simple-header-logado.component';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [RouterModule, SimpleHeaderLogadoComponent],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {
  public menus = [
    { nome: '[Acessos Fono]' },
    { nome: 'Início', path: 'fono/pages/inicio' },
    { nome: 'Gerenciar Pictogramas', path: 'fono/pages/gerenciar-pictogramas' },
    { nome: 'Cadastrar Parceiros', path: 'fono/pages/cadastrar-parceiros' },
    { nome: 'Editar Parceiros', path: 'fono/pages/editar-parceiros' },
    { nome: 'Relatórios', path: 'fono/pages/relatorios' },
    { nome: 'Meus dados', path: 'fono/pages/meus-dados' },
    { nome: 'Dados de Pacientes', path: 'fono/pages/dados-de-pacientes' },
    { nome: 'Entrevistas', path: 'fono/pages/entrevistas' }
  ];

  
}
