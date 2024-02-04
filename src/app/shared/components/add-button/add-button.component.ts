import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { modalNewWord } from '../../../state/actions/interface.actions';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {

  constructor(private readonly store:Store){ }

  dispatchNewWordModal(){
    this.store.dispatch(modalNewWord());
  }
}
