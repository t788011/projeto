import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-paciente',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent, FormsModule],
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent {
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

  public paciente = {
    nome: '',
    dataNascimento: '',
    endereco: '',
    telefone: '',
    cpf: '',
    tipoDeficiencia: '',
    nomeResponsavel: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    confirmarSenha: ''
  };

  constructor(private router: Router, private http: HttpClient) {}

  public redirectToCadastroInicial(){
    this.router.navigate(['cadastro/pages/inicio']);
  }

  public cadastrarPaciente() {
    this.http.post('http://localhost:3302/cadastropaciente', this.paciente)
      .subscribe(response => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['login']);
      }, error => {
        console.error(error);
        alert('Erro ao cadastrar paciente');
      });
  }
}
