import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FonoService } from '../services/fono.service';
import { SimpleHeaderComponent } from '../components/simple-header/simple-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent, NgIf, NgFor, NgClass, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public menus = [
    {nome:'Início', path: "home/pages/inicio" },
    {nome:'Informações'},
    {nome:'Aprender CAA', path: "home/pages/aprender-caa"},
    {nome:'Pictogramas', path: "home/pages/pictogramas"},
    {nome:'Termos de utilização', path: "home/pages/termos-de-utilizacao"},
    {nome:'Quem somos'},
    {nome:'Sobre nós', path: "home/pages/sobre-nos"},
    {nome:'Fonoaudiólogos', path: "home/pages/fonoaudiologos"},
    {nome:'Contacte-nos', path: "home/pages/contacte-nos"},
    {nome:'Orientações'},
    {nome:'Pagamentos', path: "home/pages/pagamentos"},
    {nome:'Entrevistas', path: "home/pages/entrevistas"},
    {nome:'Sistema', path: "home/pages/sistema"},
    {nome:'Comunicação' ,path: "home/pages/comunicacao"}
  ];

  public cpf: string = '';
  public password: string = '';

  constructor(private router: Router, private fonoService: FonoService) {}

  public login() {
    this.fonoService.login(this.cpf, this.password).subscribe(response => {
      console.log("Informações passadas")
      if (response.tipo === 'fono') {
        console.log("Fono encontrada")
        this.router.navigate(['fono/pages/inicio']);
      } else if (response.tipo === 'paciente') {
        console.log("Paciente encontrada")
        this.router.navigate(['pacientes/pages/inicio']);
      } else {
        alert('Login falhou');
      }
    }, error => {
      console.error(error);
      alert('Erro no login');
    });
  }

  public redirectToCadastroInicial() {
    this.router.navigate(['cadastro/pages/inicio']);
  }
}
