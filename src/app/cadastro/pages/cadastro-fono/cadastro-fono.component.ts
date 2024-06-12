import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimpleHeaderComponent } from '../../../components/simple-header/simple-header.component';
import { FonoService } from '../../../services/fono.service';

@Component({
  selector: 'app-cadastro-fono',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent, NgIf, NgFor, NgClass, FormsModule],
  templateUrl: './cadastro-fono.component.html',
  styleUrls: ['./cadastro-fono.component.css']
})
export class CadastroFonoComponent {
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

  public fono: any = {
    first_name: '',
    birth_date: '',
    address: '',
    phone: '',
    cpf: '',
    crfa: '',
    crfa_expiry: '',
    email: '',
    confirm_email: '',
    password: '',
    confirm_password: ''
  };

  constructor(private router: Router, private fonoService: FonoService) { }

  public redirectToCadastroInicial() {
    this.router.navigate(['cadastro/pages/inicio']);
  }

  public saveFono() {
    if (this.fono.email !== this.fono.confirm_email || this.fono.password !== this.fono.confirm_password) {
      alert("Email e/ou senha não conferem!");
      return;
    }
    this.fonoService.saveFono(this.fono).subscribe(response => {
      alert("Cadastro realizado com sucesso!");
      this.redirectToCadastroInicial();
    }, error => {
      alert("Erro ao realizar cadastro!");
    });
  }
}
