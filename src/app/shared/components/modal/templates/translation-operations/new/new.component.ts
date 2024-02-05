import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WORD_TYPE, WordType } from '../../../../../interfaces/word.interface';

@Component({
  selector: 'app-translation-m-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewTranslationModalComponent {
  form!:FormGroup;

  optionSelect: {label:string; value:WordType}[] = WORD_TYPE;
}
