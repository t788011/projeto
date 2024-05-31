import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenderCaaComponent } from './aprender-caa.component';

describe('AprenderCaaComponent', () => {
  let component: AprenderCaaComponent;
  let fixture: ComponentFixture<AprenderCaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprenderCaaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AprenderCaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
