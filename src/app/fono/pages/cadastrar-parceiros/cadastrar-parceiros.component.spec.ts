import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarParceirosComponent } from './cadastrar-parceiros.component';

describe('CadastrarParceirosComponent', () => {
  let component: CadastrarParceirosComponent;
  let fixture: ComponentFixture<CadastrarParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarParceirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
