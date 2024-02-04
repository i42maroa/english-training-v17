import { Component } from '@angular/core';
import {WORDS_TEST, WordInterface } from '../../shared/interfaces/word.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './words.component.html',
  styleUrl: './words.component.css'
})
export class WordsComponent {
    words: WordInterface[] = WORDS_TEST;
}
