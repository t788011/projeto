import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';
import { FormsModule } from '@angular/forms';
import { FonoService } from '../../../services/fono.service';

@Component({
  selector: 'app-cadastro-paciente',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent, NgIf, NgFor, NgClass, FormsModule],
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent {
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

  public paciente: any = {
    nome: '',
    dataNascimento: '',
    endereco: '',
    telefone: '',
    cpf: '',
    tipoDeficiencia: '',
    nome_responsavel: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    confirmarSenha: ''
  };

 


constructor(private router: Router, private fonoService: FonoService) { }

  public redirectToCadastroInicial() {
    this.router.navigate(['cadastro/pages/inicio']);
  }

  public savePaciente() {
      if (this.paciente.email !== this.paciente.confirmarEmail || this.paciente.senha !== this.paciente.confirmarSenha) {
      alert("Email e/ou senha não conferem!");
      return;
    }
    this.fonoService.savePaciente(this.paciente).subscribe(response => {
      alert("Cadastro realizado com sucesso!");
      this.redirectToCadastroInicial();
    }, error => {
      alert("Erro ao realizar cadastro!");
    });
  }
}
