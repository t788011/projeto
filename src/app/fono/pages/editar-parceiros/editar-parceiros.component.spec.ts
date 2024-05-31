import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarParceirosComponent } from './editar-parceiros.component';

describe('EditarParceirosComponent', () => {
  let component: EditarParceirosComponent;
  let fixture: ComponentFixture<EditarParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarParceirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
