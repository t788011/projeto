import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-meus-dados',
  standalone: true,
  imports: [RouterModule, CommonModule, SimpleHeaderComponent],
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent {
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
  ];

  public playSelection(): void {
    console.log('Play button clicked');
    // Adicione a funcionalidade para reproduzir a seleção
  }

  public clearSelection(): void {
    console.log('Clear button clicked');
    // Adicione a funcionalidade para limpar a seleção
  }

  public deleteWord(): void {
    console.log('Delete word button clicked');
    // Adicione a funcionalidade para apagar a palavra
  }

  public saveConfiguration(): void {
    console.log('Save configuration');
    // Adicione a funcionalidade para salvar a configuração
  }

  public changeTheme(theme: string): void {
    console.log(`${theme} theme selected`);
    // Adicione a funcionalidade para mudar o tema
  }
}
