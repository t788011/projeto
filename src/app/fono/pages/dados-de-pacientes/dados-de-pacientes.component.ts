import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-dados-de-pacientes',
  standalone: true,
  imports: [RouterModule,CommonModule, SimpleHeaderComponent],
  templateUrl: './dados-de-pacientes.component.html',
  styleUrls: ['./dados-de-pacientes.component.css'] 
})
export class DadosDePacientesComponent {
  public menus = [
    { nome: 'Acessos Fonoaudiólogo' },
    { nome: 'Início', path: "fono/pages/inicio" },
    { nome: 'Gerenciar Pictogramas', path: "fono/pages/gerenciar-pictogramas" },
    { nome: 'Cadastrar Parceiros', path: "fono/pages/cadastrar-parceiros" },
    { nome: 'Editar Parceiros', path: "fono/pages/editar-parceiros" },
    { nome: 'Relatórios', path: "fono/pages/relatorios" },
    { nome: 'Meus dados', path: "fono/pages/meus-dados" },
    { nome: 'Dados de Pacientes', path: "fono/pages/dados-de-pacientes" },
    { nome: 'Entrevistas', path: "fono/pages/entrevistas" }
  ];

  public selectedFigures: any[] = [];
  public figures = [
    { src: '../../../../assets/img/grid 1.png', label: 'EU' },
    { src: '../../../../assets/img/grid 2.png', label: 'BRINCAR' },
    { src: '../../../../assets/img/grid 3.png', label: 'NAO_QUERO' },
    { src: '../../../../assets/img/grid 4.png', label: 'VOCE' },
    { src: '../../../../assets/img/grid 5.png', label: 'MAIS' },
    { src: '../../../../assets/img/grid 6.png', label: 'SIM' },
    { src: '../../../../assets/img/grid 7.png', label: 'QUERO' },
    { src: '../../../../assets/img/grid 8.png', label: 'COMER' }
    ];

  public addFigure(label: string): void {
    this.selectedFigures.push(label);
  }

  public clearFigures(): void {
    this.selectedFigures = [];
  }

  public deleteLastFigure(): void {
    this.selectedFigures.pop();
  }

  public saveConfiguration(): void {
    alert(`Configuration saved with ${this.selectedFigures.length} figures.`);
  }

  public getFigureSrc(label: string): string {
    const figure = this.figures.find(f => f.label === label);
    return figure ? figure.src : '';
  }

  public playFigures(): void {
    alert('Playing audio for the selected figures...');
    // Implementar a lógica de reprodução de áudio aqui
  }
}
