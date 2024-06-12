import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';

@Component({
  selector: 'app-termos-de-utilizacao',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './termos-de-utilizacao.component.html',
  styleUrl: './termos-de-utilizacao.component.css'
})
export class TermosDeUtilizacaoComponent {
  public menus = [
    {nome:'Início', path: "home/pages/inicio" },
    {nome:'[Informações]'},
    {nome:'Aprender CAA', path: "home/pages/aprender-caa"},
    {nome:'Pictogramas', path: "home/pages/pictogramas"},
    {nome:'Termos de utilização', path: "home/pages/termos-de-utilizacao"},
    {nome:'[Quem somos]'},
    {nome:'Sobre nós', path: "home/pages/sobre-nos"},
    {nome:'Fonoaudiólogos', path: "home/pages/fonoaudiologos"},
    {nome:'Contacte-nos', path: "home/pages/contacte-nos"},
    {nome:'[Orientações]'},
    {nome:'Pagamentos', path: "home/pages/pagamentos"},
    {nome:'Entrevistas', path: "home/pages/entrevistas"},
    {nome:'Sistema', path: "home/pages/sistema"},
    {nome:'Comunicação' ,path: "home/pages/comunicacao"}
 ]

}
