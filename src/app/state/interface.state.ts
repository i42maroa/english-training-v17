import { WordInterface } from "../shared/interfaces/word.interface";

export interface InterfaceState{
  showAddButton:boolean,
  modal:ModalState
}

export interface ModalState{
  show:boolean,
  type: ModalType,
  wordPrecharged?:WordInterface
}


export type ModalType = WordOperation | TranslationOperation | ExamplesOperation;

export type WordOperation = 'new-word' | 'modify-word' | 'delete-word';
export type TranslationOperation = 'new-translation' | 'modify-translation' | 'delete-translation';
export type ExamplesOperation = 'new-example' | 'modify-example' | 'delete-example';

export const PREDIFINED_INTERFACE_STATE:InterfaceState = {
  showAddButton:false,
  modal:{
    show:false,
    type: 'new-word'
  }
}

