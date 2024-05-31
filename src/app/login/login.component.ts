import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SimpleHeaderComponent } from '../components/simple-header/simple-header.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, SimpleHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public menus = [
    {nome:'Início', path: "home/pages/inicio" },
    {nome:'Informações'},
    {nome:'Aprender CAA', path: "home/pages/aprender-caa"},
    {nome:'Pictogramas'},
    {nome:'Termos de utilização'},
    {nome:'Quem somos'},
    {nome:'Sobre nós'},
    {nome:'Fonoaudiólogos'},
    {nome:'Contacte-nos'},
    {nome:'Orientações'},
    {nome:'Pagamentos'},
    {nome:'Entrevistas'},
    {nome:'Sistema'},
    {nome:'Comunicação'}
 ]
  constructor(private router: Router){

  }
public redirectToPatients(){
this.router.navigate(['pacientes/pages/inicio'])
}
}
