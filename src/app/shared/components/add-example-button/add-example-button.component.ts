import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { modalNewExample } from '../../../state/actions/interface.actions';

@Component({
  selector: 'app-add-example-button',
  standalone: true,
  imports: [],
  templateUrl: './add-example-button.component.html',
  styleUrl: './add-example-button.component.css'
})
export class AddExampleButtonComponent {

  @Input() translationSel: number = 0;

  constructor(private readonly store:Store){ }

  dispatchNewWordModal(){
    this.store.dispatch(modalNewExample({translationSel:this.translationSel}));
  }
}
