import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarComunicacaoComponent } from './iniciar-comunicacao.component';

describe('IniciarComunicacaoComponent', () => {
  let component: IniciarComunicacaoComponent;
  let fixture: ComponentFixture<IniciarComunicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarComunicacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniciarComunicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
