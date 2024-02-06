import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectShowModal, selectTypeModal } from '../../../state/selectors/interface.selector';
import { CommonModule } from '@angular/common';
import { ModalType } from '../../../state/interface.state';
import { TemplatesModalModule } from './templates/templates.module';
import { closeModal } from '../../../state/actions/interface.actions';
import { LIST_MODAL_TITLE } from '../../../data/modal.data';

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
  title:string = "";

  constructor(private readonly store:Store){
    this.showModal$ = this.store.select(selectShowModal);
    this.typeModal$ = this.store.select(selectTypeModal);
    this.typeModal$.subscribe((type:ModalType) => this.title = LIST_MODAL_TITLE[type] )
  }

  closeModal(){
    this.store.dispatch(closeModal());
  }
}
