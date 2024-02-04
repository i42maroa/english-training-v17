import { Component } from '@angular/core';
import {WORDS_TEST, WordInterface } from '../../shared/interfaces/word.interface';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { listWords } from '../../state/selectors/words.selector';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from '../../shared/components/add-button/add-button.component';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [CommonModule, RouterModule, AddButtonComponent],
  templateUrl: './words.component.html',
  styleUrl: './words.component.css'
})
export class WordsComponent {

    words$:Observable<ReadonlyArray<WordInterface>> = new Observable<ReadonlyArray<WordInterface>>();
    words: WordInterface[] = WORDS_TEST;

    constructor(private readonly store:Store){
      this.words$= this.store.select(listWords);
    }
}
