import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAcessosComponent } from './meus-acessos.component';

describe('MeusAcessosComponent', () => {
  let component: MeusAcessosComponent;
  let fixture: ComponentFixture<MeusAcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusAcessosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeusAcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
