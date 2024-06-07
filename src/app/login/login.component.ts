import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SimpleHeaderComponent } from '../components/simple-header/simple-header.component';
import { FonoService } from '../services/fono.service'; // Importar o serviço

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
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

  constructor(private router: Router, private fonoService: FonoService) {}

  public redirectToPatients() {
    this.router.navigate(['pacientes/pages/inicio']);
  }

  public redirectToCadastroInicial() {
    this.router.navigate(['cadastro/pages/inicio']);
  }

  public login(cpf: string, senha: string) {
    this.fonoService.login(cpf, senha).subscribe(response => {
      if (response.tipo === 'fono') {
        this.router.navigate(['fono/pages/inicio']);
      } else if (response.tipo === 'paciente') {
        this.router.navigate(['pacientes/pages/inicio']);
      } else {
        alert('Login falhou');
      }
    }, error => {
      console.error(error);
      alert('Erro no login');
    });
  }
}
