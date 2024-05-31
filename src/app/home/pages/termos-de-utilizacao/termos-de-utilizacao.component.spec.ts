import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosDeUtilizacaoComponent } from './termos-de-utilizacao.component';

describe('TermosDeUtilizacaoComponent', () => {
  let component: TermosDeUtilizacaoComponent;
  let fixture: ComponentFixture<TermosDeUtilizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermosDeUtilizacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermosDeUtilizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
