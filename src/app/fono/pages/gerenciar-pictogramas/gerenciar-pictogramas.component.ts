import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-gerenciar-pictogramas',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './gerenciar-pictogramas.component.html',
  styleUrls: ['./gerenciar-pictogramas.component.css']
})
export class GerenciarPictogramasComponent implements AfterViewInit {
  public menus = [
    {nome: 'Acessos Fonoaudiólogo'},
    {nome: 'Início', path: "fono/pages/inicio"},
    {nome: 'Gerenciar Pictogramas', path: "fono/pages/gerenciar-pictogramas"},
    {nome: 'Cadastrar Parceiros', path: "fono/pages/cadastrar-parceiros"},
    {nome: 'Editar Parceiros', path: "fono/pages/editar-parceiros"},
    {nome: 'Relatórios', path: "fono/pages/relatorios"},
    {nome: 'Meus dados', path: "fono/pages/meus-dados"},
    {nome: 'Dados de Pacientes', path: "fono/pages/dados-de-pacientes"},
    {nome: 'Entrevistas', path: "fono/pages/entrevistas"}
  ];

  ngAfterViewInit() {
    // Função para lidar com a seleção de imagens e cards
    const handleSelection = (event: Event) => {
      const selectedElement = event.target as HTMLElement;
      const id = selectedElement.getAttribute('data-id');
  
      // Remove a classe 'selected' de todos os elementos
      document.querySelectorAll('.selectable').forEach(el => {
        el.classList.remove('selected');
      });
  
      // Adiciona a classe 'selected' ao elemento clicado
      selectedElement.classList.add('selected');
  
      // Personalize as ações aqui
      console.log(`Elemento com ID ${id} foi selecionado`);
    };
  
    // Adiciona o evento de clique a todos os elementos selecionáveis
    document.querySelectorAll('.selectable').forEach(el => {
      el.addEventListener('click', handleSelection);
    });
  }
}
