import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonoaudiologosComponent } from './fonoaudiologos.component';

describe('FonoaudiologosComponent', () => {
  let component: FonoaudiologosComponent;
  let fixture: ComponentFixture<FonoaudiologosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonoaudiologosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FonoaudiologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
