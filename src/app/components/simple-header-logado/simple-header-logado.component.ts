import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-simple-header-logado',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './simple-header-logado.component.html',
  styleUrl: './simple-header-logado.component.css'
})
export class SimpleHeaderLogadoComponent {
  @Input() tela:string = '';
  @Input() menus:Array<any> = [];
  
  constructor(private router: Router){
  
  }
  public redirectToPath(path:string){
    this.router.navigate([path])
    console.log(path)
    }
}

