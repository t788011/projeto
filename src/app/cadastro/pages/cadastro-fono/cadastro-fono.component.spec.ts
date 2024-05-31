import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFonoComponent } from './cadastro-fono.component';

describe('CadastroFonoComponent', () => {
  let component: CadastroFonoComponent;
  let fixture: ComponentFixture<CadastroFonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroFonoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroFonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
