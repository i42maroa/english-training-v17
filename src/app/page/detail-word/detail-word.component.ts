import { Component } from '@angular/core';
import { WORDS_TEST, WordInterface } from '../../shared/interfaces/word.interface';
import { Store } from '@ngrx/store';
import { listWords } from '../../state/selectors/words.selector';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-word',
  standalone: true,
  imports: [],
  templateUrl: './detail-word.component.html',
  styleUrl: './detail-word.component.css'
})
export class DetailWordComponent {

  word:WordInterface = WORDS_TEST[0];

  constructor(
    private readonly store:Store,
    private readonly route: ActivatedRoute){
    const wordId = this.route.snapshot.params['word'];

    // TODO: if don't find in cache word, save in db
    this.store.select(listWords)
      .subscribe(words => {
        this.word = words.find(w => w._id === wordId) ?? WORDS_TEST[0]
    });

  }

}
