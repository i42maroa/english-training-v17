import { ModalType } from "../state/interface.state";

export type MODAL_KEY_VALUE = {
  [key in ModalType]: string;
};

export const LIST_MODAL_TITLE:MODAL_KEY_VALUE = {
   'new-word':'Nueva palabra',
   'modify-word':'Modificar palabra',
   'delete-word':'Eliminar palabra',
   'new-translation':'Nueva traducción',
   'modify-translation':'Modificar traducción',
   'delete-translation':'Eliminar traducción',
   'modify-example':'Modificar ejemplo',
   'delete-example':'Eliminar ejemplo',
   'new-example':'Nuevo ejemplo',
  };
