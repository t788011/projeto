import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDePacientesComponent } from './dados-de-pacientes.component';

describe('DadosDePacientesComponent', () => {
  let component: DadosDePacientesComponent;
  let fixture: ComponentFixture<DadosDePacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosDePacientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosDePacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
