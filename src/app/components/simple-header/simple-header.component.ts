import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-simple-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './simple-header.component.html',
  styleUrl: './simple-header.component.css'
})
export class SimpleHeaderComponent {
@Input() tela:string = '';
@Input() menus:Array<any> = [];

constructor(private router: Router){

}
public redirectToPath(path:string){
  this.router.navigate([path])
  console.log(path)
  }
 }
