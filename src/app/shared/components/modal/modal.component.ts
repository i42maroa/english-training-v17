import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectShowModal, selectTypeModal } from '../../../state/selectors/interface.selector';
import { CommonModule } from '@angular/common';
import { ModalType } from '../../../state/interface.state';
import { TemplatesModalModule } from './templates/templates.module';
import { closeModal } from '../../../state/actions/interface.actions';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, TemplatesModalModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  showModal$: Observable<boolean>;
  typeModal$: Observable<ModalType>;

  constructor(private readonly store:Store){
    this.showModal$ = this.store.select(selectShowModal);
    this.typeModal$ = this.store.select(selectTypeModal);
  }

  closeModal(){
    this.store.dispatch(closeModal());
  }
}
