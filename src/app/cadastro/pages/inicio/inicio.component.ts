import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
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
 

  public isFonoaudiologo: boolean = false;
  public isPaciente: boolean = false;
  public isAdvanceButtonActive: boolean = false;

  constructor(private router: Router) {}

  onFonoaudiologoChecked(event: any) {
    // Verifica se o checkbox de paciente está marcado
    if (event.target.checked) {
      // Desmarca o checkbox de paciente e deixa-o desabilitado
      this.isPaciente = false;
      this.isPackienteDisabled = true;
    } else {
      // Habilita o checkbox de paciente
      this.isPackienteDisabled = false;
    }
    this.isFonoaudiologo = event.target.checked;
    this.isAdvanceButtonActive = this.isFonoaudiologo || this.isPaciente;
  }

  onPacienteChecked(event: any) {
    // Verifica se o checkbox de fonoaudiólogo está marcado
    if (event.target.checked) {
      // Desmarca o checkbox de fonoaudiólogo e deixa-o desabilitado
      this.isFonoaudiologo = false;
      this.isFonoaudiologoDisabled = true;
    } else {
      // Habilita o checkbox de fonoaudiólogo
      this.isFonoaudiologoDisabled = false;
    }
    this.isPaciente = event.target.checked;
    this.isAdvanceButtonActive = this.isFonoaudiologo || this.isPaciente;
  }

  public isFonoaudiologoDisabled: boolean = false;
  public isPackienteDisabled: boolean = false;

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  redirectToRegister() {
    if (this.isFonoaudiologo) {
      this.router.navigate(['cadastro/pages/cadastro-fono']);
    } else if (this.isPaciente) {
      this.router.navigate(['cadastro/pages/cadastro-paciente']);
    }
  }
}