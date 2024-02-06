import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExampleButtonComponent } from './add-example-button.component';

describe('AddExampleButtonComponent', () => {
  let component: AddExampleButtonComponent;
  let fixture: ComponentFixture<AddExampleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExampleButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddExampleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
