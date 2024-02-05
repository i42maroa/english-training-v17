import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTranslationButtonComponent } from './add-translation-button.component';

describe('AddTranslationButtonComponent', () => {
  let component: AddTranslationButtonComponent;
  let fixture: ComponentFixture<AddTranslationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTranslationButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTranslationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
