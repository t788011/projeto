import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarPictogramasComponent } from './gerenciar-pictogramas.component';

describe('GerenciarPictogramasComponent', () => {
  let component: GerenciarPictogramasComponent;
  let fixture: ComponentFixture<GerenciarPictogramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarPictogramasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarPictogramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
