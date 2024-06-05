import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [RouterModule, CommonModule, SimpleHeaderComponent],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {
  public menus = [
    { nome: 'Acessos Fonoaudiólogo' },
    { nome: 'Início', path: 'fono/pages/inicio' },
    { nome: 'Gerenciar Pictogramas', path: 'fono/pages/gerenciar-pictogramas' },
    { nome: 'Cadastrar Parceiros', path: 'fono/pages/cadastrar-parceiros' },
    { nome: 'Editar Parceiros', path: 'fono/pages/editar-parceiros' },
    { nome: 'Relatórios', path: 'fono/pages/relatorios' },
    { nome: 'Meus dados', path: 'fono/pages/meus-dados' },
    { nome: 'Dados de Pacientes', path: 'fono/pages/dados-de-pacientes' },
    { nome: 'Entrevistas', path: 'fono/pages/entrevistas' }
  ];

  public selectedImages: any[] = [];
  public pictograms = [
    { src: '../../../../assets/img/grid 1.png', alt: 'EU', label: 'EU' },
    { src: '../../../../assets/img/grid 2.png', alt: 'BRINCAR', label: 'BRINCAR' },
    { src: '../../../../assets/img/grid 3.png', alt: 'NÂO QUERO', label: 'NÂO QUERO' },
    { src: '../../../../assets/img/grid 4.png', alt: 'VOCÊ', label: 'VOCÊ' },
    { src: '../../../../assets/img/grid 5.png', alt: 'MAIS', label: 'MAIS' },
    { src: '../../../../assets/img/grid 6.png', alt: 'SIM', label: 'SIM' },
    { src: '../../../../assets/img/grid 7.png', alt: 'QUERO', label: 'QUERO' },
    { src: '../../../../assets/img/grid 8.png', alt: 'COMER', label: 'COMER' },
        // ... more pictograms
  ];

  public categories = [
    { name: 'Passear' },
    { name: 'Alimentos' },
    { name: 'Brincadeiras' },
    // ... more categories
  ];

  selectPictogram(pictogram: any) {
    this.selectedImages.push(pictogram);
  }

  clearSelection() {
    this.selectedImages = [];
  }

  removeLast() {
    this.selectedImages.pop();
  }

  replaceImage(index: number) {
    const newImage = this.pictograms[0]; // Para demonstração, substitua pelo primeiro pictograma
    this.selectedImages[index] = newImage;
  }

  selectCategory(category: any) {
    // lógica para carregar pictogramas com base na categoria selecionada
  }
}
