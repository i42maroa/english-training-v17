import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { modalNewTranslation } from '../../../../state/actions/interface.actions';

@Component({
  selector: 'app-add-translation-button',
  standalone: true,
  imports: [],
  templateUrl: './add-translation-button.component.html',
  styleUrl: './add-translation-button.component.css'
})
export class AddTranslationButtonComponent {

  constructor(private readonly store:Store){ }

  dispatchNewWordModal(){
    this.store.dispatch(modalNewTranslation());
  }
}
