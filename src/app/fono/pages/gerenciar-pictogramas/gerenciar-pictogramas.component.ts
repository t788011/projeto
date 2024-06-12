import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpleHeaderLogadoComponent } from '../../../components/simple-header-logado/simple-header-logado.component';

@Component({
  selector: 'app-gerenciar-pictogramas',
  standalone: true,
  imports: [RouterModule, CommonModule, SimpleHeaderLogadoComponent],
  templateUrl: './gerenciar-pictogramas.component.html',
  styleUrls: ['./gerenciar-pictogramas.component.css']
})
export class GerenciarPictogramasComponent{
  public menus = [
    {nome: '[Acessos Fono]'},
    {nome: 'Início', path: "fono/pages/inicio"},
    {nome: 'Gerenciar Pictogramas', path: "fono/pages/gerenciar-pictogramas"},
    {nome: 'Cadastrar Parceiros', path: "fono/pages/cadastrar-parceiros"},
    {nome: 'Editar Parceiros', path: "fono/pages/editar-parceiros"},
    {nome: 'Relatórios', path: "fono/pages/relatorios"},
    {nome: 'Meus dados', path: "fono/pages/meus-dados"},
    {nome: 'Dados de Pacientes', path: "fono/pages/dados-de-pacientes"},
    {nome: 'Entrevistas', path: "fono/pages/entrevistas"}
  ];

  public selectedFigures: any[] = [];
  public figures = [
    { src: '../../../../assets/img/grid 1.png', label: 'EU', audioSrc: '../../../../assets/audio/eu.mp3' },
    { src: '../../../../assets/img/grid 2.png', label: 'BRINCAR', audioSrc: '../../../../assets/audio/brincar.mp3' },
    { src: '../../../../assets/img/grid 3.png', label: 'NAO_QUERO', audioSrc: '../../../../assets/audio/nao_quero.mp3' },
    { src: '../../../../assets/img/grid 4.png', label: 'VOCE', audioSrc: '../../../../assets/audio/voce.mp3' },
    { src: '../../../../assets/img/grid 5.png', label: 'MAIS', audioSrc: '../../../../assets/audio/mais.mp3' },
    { src: '../../../../assets/img/grid 6.png', label: 'SIM', audioSrc: '../../../../assets/audio/sim.mp3' },
    { src: '../../../../assets/img/grid 7.png', label: 'QUERO', audioSrc: '../../../../assets/audio/quero.mp3' },
    { src: '../../../../assets/img/grid 8.png', label: 'COMER', audioSrc: '../../../../assets/audio/comer.mp3' }
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

  public getFigureAudioSrc(label: string): string {
    const figure = this.figures.find(f => f.label === label);
    return figure ? figure.audioSrc : '';
  }

  public playFigures(): void {
    const audioPromises = this.selectedFigures.map((label, index) => {
      const audioSrc = this.getFigureAudioSrc(label);
      if (audioSrc) {
        return new Promise<void>((resolve) => {
          const audio = new Audio(audioSrc);
          audio.onended = () => resolve();
          setTimeout(() => {
            audio.play();
          }, index * 1000); 
        });
      }
      return Promise.resolve();
    });

    Promise.all(audioPromises).then(() => {
      
    });
  }
}