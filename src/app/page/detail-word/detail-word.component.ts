import { Component } from '@angular/core';
import { WORDS_TEST, WordInterface } from '../../shared/interfaces/word.interface';
import { Store } from '@ngrx/store';
import { listWords } from '../../state/selectors/words.selector';
import { ActivatedRoute } from '@angular/router';
import { AddTranslationButtonComponent } from '../../shared/components/buttons/add-translation-button/add-translation-button.component';
import { AddExampleButtonComponent } from '../../shared/components/buttons/add-example-button/add-example-button.component';
import { Observable } from 'rxjs';
import { selectShowAddButton } from '../../state/selectors/interface.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-word',
  standalone: true,
  imports: [AddTranslationButtonComponent, AddExampleButtonComponent, CommonModule],
  templateUrl: './detail-word.component.html',
  styleUrl: './detail-word.component.css'
})
export class DetailWordComponent {

  word:WordInterface = WORDS_TEST[0];
  showAddButton$:Observable<boolean>;

  constructor(
    private readonly store:Store,
    private readonly route: ActivatedRoute){

    this.showAddButton$= this.store.select(selectShowAddButton);

    const wordId = this.route.snapshot.params['word'];

    // TODO: if don't find in cache word, save in db
    this.store.select(listWords)
      .subscribe(words => {
        this.word = words.find(w => w._id === wordId) ?? WORDS_TEST[0]
    });

  }

}
