import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordButtonComponent } from './add-word-button.component';

describe('AddButtonComponent', () => {
  let component: AddWordButtonComponent;
  let fixture: ComponentFixture<AddWordButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWordButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
