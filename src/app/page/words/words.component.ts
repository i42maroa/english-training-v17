import { Component } from '@angular/core';
import {WORDS_TEST, WordInterface } from '../../shared/interfaces/word.interface';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { listWords } from '../../state/selectors/words.selector';
import { CommonModule } from '@angular/common';
import { AddWordButtonComponent } from '../../shared/components/buttons/add-word-button/add-word-button.component';
import { selectShowAddButton } from '../../state/selectors/interface.selector';
import { FirestoreService } from '../../core/services/firestore.service';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [CommonModule, RouterModule, AddWordButtonComponent],
  templateUrl: './words.component.html',
  styleUrl: './words.component.css'
})
export class WordsComponent {

  words$:Observable<ReadonlyArray<WordInterface>>;
  showAddButton$:Observable<boolean>;

  words: WordInterface[] = WORDS_TEST;

    constructor(private readonly store:Store, private firestoreService:FirestoreService){
      this.words$= this.store.select(listWords);
      this.showAddButton$= this.store.select(selectShowAddButton);
      this.firestoreService.getWords().subscribe(word => console.log(word) )
    }
}
