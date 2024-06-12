import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFonoComponent } from './cadastro-fono.component';
import { FonoService } from '../../../services/fono.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';

fdescribe('CadastroFonoComponent', () => {
  let component: CadastroFonoComponent;
  let fixture: ComponentFixture<CadastroFonoComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroFonoComponent],
      providers: [
        HttpClient, 
        HttpHandler,
        FonoService,
                {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: any) => 'value'})
          }
        }
]
      
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroFonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirectToCadastroInicial', () => {
    const spy = spyOn(component['router'],'navigate')
    component.redirectToCadastroInicial();
    expect(spy).toHaveBeenCalled();
  });
  it('should saveFono', () => {
    const spy = spyOn(window,'alert')
    component.fono.email = 'teste1';
    component.fono.confirm_email = 'teste2';
    component.saveFono();
    expect(spy).toHaveBeenCalled();
  });
  it('should saveFono-sameEmailPassword', () => {
    const spy = spyOn(window,'alert')
    spyOn(component['fonoService'],'saveFono').and.returnValue(of({}));
    component.saveFono();
    expect(spy).toHaveBeenCalled();
  });

});