import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSociosComponent } from './cadastrar-socios.component';

describe('CadastrarSociosComponent', () => {
  let component: CadastrarSociosComponent;
  let fixture: ComponentFixture<CadastrarSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarSociosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
