import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPictogramasComponent } from './editar-pictogramas.component';

describe('EditarPictogramasComponent', () => {
  let component: EditarPictogramasComponent;
  let fixture: ComponentFixture<EditarPictogramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPictogramasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPictogramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
