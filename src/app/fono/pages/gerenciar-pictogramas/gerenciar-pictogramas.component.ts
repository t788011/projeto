import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpleHeaderLogadoComponent } from '../../../components/simple-header-logado/simple-header-logado.component';
import { HttpClient } from '@angular/common/http';
import { FonoService } from '../../../services/fono.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gerenciar-pictogramas',
  standalone: true,
  imports: [RouterModule, CommonModule, SimpleHeaderLogadoComponent,FormsModule],
  templateUrl: './gerenciar-pictogramas.component.html',
  styleUrls: ['./gerenciar-pictogramas.component.css']
})

export class GerenciarPictogramasComponent implements OnInit {
  public menus = [
    { nome: '[Acessos Fono]' },
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
  public figures: any[] = [];
  public newFigures: any[] = [];
  public editFigure: any = null;
  public testeBase64: any = null;
  public testeAudioBase64: any = null;
  public label: string = '';
  public createFigure: any = null;
  public tema: string = '';
  public deleteFigure:  any = null;

  isEditingLoadNewFigures: boolean = false;

  constructor(private http: HttpClient, private fonoService: FonoService) { }

  ngOnInit(): void {
    // Carregar figuras do backend ao inicializar o componente
    this.loadFigures();
  }

  loadFigures(): void {
    this.tema = "pictograma";
    this.http.get<any[]>('http://localhost:3302/pictograms').subscribe(
      (data) => {
        this.figures = data;
      },
      (error) => {
        console.error('Erro ao carregar pictogramas', error);
      }
    );
  }

  loadNewFigures(): void {
    this.tema = "alimento";
    this.http.get<any[]>('http://localhost:3302/alimentos').subscribe(
      (data) => {
        this.figures = data;
        // this.figures = data.map(figure => ({ ...figure, is_alimento: true }));
      },
      (error) => {
        console.error('Erro ao carregar alimentos', error);
      }
    );
  }

  
  loadBrincar(): void {
    this.tema = "brincar";
    this.http.get<any[]>('http://localhost:3302/brincar').subscribe(
      (data) => {
        this.figures = data;
        // this.figures = data.map(figure => ({ ...figure, is_brincar: true }));
      },
      (error) => {
        console.error('Erro ao carregar brincar', error);
      }
    );
  }

  addFigure(label: string): void {
    if (!this.selectedFigures.includes(label)) {
      this.selectedFigures.push(label);
    }
  }

  clearFigures(): void {
    this.selectedFigures = [];
  }

  deleteLastFigure(): void {
    this.selectedFigures.pop();
  }

  saveConfiguration(): void {
    alert(`Configuração salva com ${this.selectedFigures.length} figuras.`);
  }

  getFigureSrc(label: string): string {
    const figure = this.figures.find((f) => f.label === label);
    return figure ? figure.image_path : '';
  }

  openEditModal(figure: any): void {
    console.log('Abrindo modal para edição:', figure);
    this.editFigure = figure;
  }

  deletarModal(figure: any): void {
    console.log('Deletar modal:', figure);
    this.deleteFigure = figure;
  }

  closeEditModal(): void {
    this.editFigure = null;
  }

  closeDeleteModal(): void {
    this.deleteFigure = null;
  }

  
  openCreateModal(): void {
    this.createFigure = {
      image_path: null,
      audio_path: null,
      label: null
    };
  }

  closeCreateModal(): void {
    this.createFigure = null;
  }

  

  onImageSelected(event: any): void {
    // Lógica para lidar com a seleção de uma nova imagem
    console.log('Nova imagem selecionada', event);

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      console.log('onImageSelected ', base64String);
      this.testeBase64 = base64String;
    }

    if (file) {
      reader.readAsDataURL(file);
    }

  }

  onAudioSelected(event: any): void {
    // Lógica para lidar com a seleção de um novo áudio
    console.log('Novo áudio selecionado', event);

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      console.log('onAudioSelected ', base64String);
      this.testeAudioBase64 = base64String;
    }

    if (file) {
      reader.readAsDataURL(file);
    }

  }


  saveEditedFigure(): void {
    // Lógica para salvar a figura editada localmente
    console.log('Figura editada salva localmente:', this.editFigure);
  
    // Encontrar a figura no array 'figures' e atualizá-la
    const index = this.figures.findIndex(f => f.id === this.editFigure.id);
    if (index !== -1) {
      this.figures[index] = this.editFigure;
      console.log(this.editFigure);
      this.editFigure.image_path = this.testeBase64 ? this.testeBase64 : this.editFigure.image_path;
      this.editFigure.audio_path = this.testeAudioBase64 ? this.testeAudioBase64 : this.editFigure.audio_path;
      this.editFigure.label = this.label ? this.label : this.editFigure.label;
      this.editFigure.ativo = this.editFigure.ativo;
  
      // Verifica se a figura é um alimento ou um pictograma
      if (this.tema === "alimento") { // Adicione a propriedade is_alimento no objeto editFigure se necessário
        this.fonoService.updateAlimento(this.editFigure.id, this.editFigure).subscribe(() => {
          this.loadFigures();
          console.log('Alimento atualizado com sucesso.');
        });
      } else if (this.tema === "brincar") { // Adicione a propriedade is_alimento no objeto editFigure se necessário
        this.fonoService.updateBrincar(this.editFigure.id, this.editFigure).subscribe(() => {
          this.loadFigures();
          console.log('Brincar atualizado com sucesso.');
        });
      }else {
        this.fonoService.updatePictro(this.editFigure.id, this.editFigure).subscribe(() => {
          this.loadFigures();
          console.log('Pictograma atualizado com sucesso.');
        });
      }
  
      // Limpa os campos de imagem, áudio e label após a atualização
      this.testeAudioBase64 = null;
      this.testeBase64 = null;
      this.label = "";
    }
  
    this.closeEditModal();
  }

  figureDesativo(event: any, figure: any): void {
    // Lógica para salvar a figura editada localmente
    console.log('Figura editada salva localmente:', figure);
    console.log(event);
    // Encontrar a figura no array 'figures' e atualizá-la
    const index = this.figures.findIndex(f => f.id === figure.id);
    if (index !== -1) {
      this.figures[index] = figure;
      console.log(figure);
      figure.ativo = event.target.checked?'S':'N';
  
      // Verifica se a figura é um alimento ou um pictograma
      if (this.tema === "alimento") { // Adicione a propriedade is_alimento no objeto editFigure se necessário
        this.fonoService.updateAlimento(figure.id, figure).subscribe(() => {
          this.loadFigures();
          console.log('Alimento atualizado com sucesso.');
        });
      } else if (this.tema === "brincar") { // Adicione a propriedade is_alimento no objeto editFigure se necessário
        this.fonoService.updateBrincar(figure.id, figure).subscribe(() => {
          this.loadFigures();
          console.log('Brincar atualizado com sucesso.');
        });
      }else {
        this.fonoService.updatePictro(figure.id, figure).subscribe(() => {
          this.loadFigures();
          console.log('Pictograma atualizado com sucesso.');
        });
      }
  
      // Limpa os campos de imagem, áudio e label após a atualização
      this.testeAudioBase64 = null;
      this.testeBase64 = null;
      this.label = "";
    }
  
    this.closeEditModal();
  }

  saveCreateFigure(): void {
    // Lógica para salvar a figura editada localmente
    console.log('Figura editada salva localmente:', this.createFigure);
  
    // Encontrar a figura no array 'figures' e atualizá-la
      console.log(this.createFigure);
      this.createFigure.image_path = this.testeBase64 ;
      this.createFigure.audio_path = this.testeAudioBase64;
      this.createFigure.label = this.label ;
      this.createFigure.ativo = "S";
  
      // Verifica se a figura é um alimento ou um pictograma
      if (this.tema === "alimento") { // Adicione a propriedade is_alimento no objeto createFigure se necessário
        this.fonoService.createAlimento(this.createFigure).subscribe(() => {
          this.loadFigures();
          console.log('Alimento atualizado com sucesso.');
        });
      } else if (this.tema === "brincar") { // Adicione a propriedade is_alimento no objeto createFigure se necessário
        this.fonoService.createBrincar(this.createFigure).subscribe(() => {
          this.loadFigures();
          console.log('Brincar atualizado com sucesso.');
        });
      }else {
        this.fonoService.createPictro(this.createFigure).subscribe(() => {
          this.loadFigures();
          console.log('Pictograma atualizado com sucesso.');
        });
      }
  
      // Limpa os campos de imagem, áudio e label após a atualização
      this.testeAudioBase64 = null;
      this.testeBase64 = null;
      this.label = "";
    
  
    this.closeCreateModal();
  }

  saveDeleteFigure(): void {
  
      // Verifica se a figura é um alimento ou um pictograma
      if (this.tema === "alimento") { // Adicione a propriedade is_alimento no objeto createFigure se necessário
        this.fonoService.deleteAlimento(this.deleteFigure.id).subscribe(() => {
          this.loadFigures();
          console.log('Alimento atualizado com sucesso.');
        });
      } else if (this.tema === "brincar") { // Adicione a propriedade is_alimento no objeto createFigure se necessário
        this.fonoService.deleteBrincar(this.deleteFigure.id).subscribe(() => {
          this.loadFigures();
          console.log('Brincar atualizado com sucesso.');
        });
      }else {
        this.fonoService.deletePictro(this.deleteFigure.id).subscribe(() => {
          this.loadFigures();
          console.log('Pictograma deletado com sucesso.');
        });
      }
  
      // Limpa os campos de imagem, áudio e label após a atualização
      this.testeAudioBase64 = null;
      this.testeBase64 = null;
      this.label = "";
    
  
    this.closeDeleteModal();
  }
  




  playFigures(): void {
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
      console.log('Reprodução concluída');
    });
  }

  // Método fictício para obter o caminho do áudio de uma figura
  getFigureAudioSrc(label: string): string {
    const figure = this.figures.find((f) => f.label === label);
    return figure ? figure.audio_path : '';
  }

 

  
  
    

  


}
