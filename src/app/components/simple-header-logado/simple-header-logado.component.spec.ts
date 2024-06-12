import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHeaderLogadoComponent } from './simple-header-logado.component';

describe('SimpleHeaderLogadoComponent', () => {
  let component: SimpleHeaderLogadoComponent;
  let fixture: ComponentFixture<SimpleHeaderLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleHeaderLogadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleHeaderLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
