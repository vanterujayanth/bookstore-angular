import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JayanthComponent } from './jayanth.component';

describe('JayanthComponent', () => {
  let component: JayanthComponent;
  let fixture: ComponentFixture<JayanthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JayanthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JayanthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
