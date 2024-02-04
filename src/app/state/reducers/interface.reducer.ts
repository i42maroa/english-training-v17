import { createReducer, on } from "@ngrx/store";
import { InterfaceState, PREDIFINED_INTERFACE_STATE } from "../interface.state";
import * as actions from "../actions/interface.actions";



export const initialState:InterfaceState = PREDIFINED_INTERFACE_STATE;

export const interfaceReducer = createReducer(
  initialState,
  //WORD MODAL
  on(actions.modalNewWord, (state:InterfaceState) => {
    return {...state, modal:{show:true, type:'new-word' as const}}
  }),
  on(actions.modalModifyWord, (state:InterfaceState, {wordPrecharged}) => {
    return {...state, modal:{show:true, type:'modify-word' as const, wordPrecharged}}
  }),
  on(actions.modalDeleteWord, (state:InterfaceState, {wordPrecharged}) => {
    return {...state, modal:{show:true, type:'delete-word' as const, wordPrecharged}}
  }),
  //TRANSLATION MODAL
  on(actions.modalNewTranslation, (state:InterfaceState, {wordPrecharged}) => {
    return {...state, modal:{show:true, type:'new-translation' as const, wordPrecharged}}
  }),
  on(actions.modalModifyTranslation, (state:InterfaceState, {wordPrecharged, translationSel}) => {
    return {...state, modal:{show:true, type:'modify-translation' as const, wordPrecharged, translationSel}}
  }),
  on(actions.modalDeleteTranslation, (state:InterfaceState, {wordPrecharged, translationSel}) => {
    return {...state, modal:{show:true, type:'delete-translation' as const, wordPrecharged, translationSel}}
  }),
  //EXAMPLE MODAL
  on(actions.modalNewExample, (state:InterfaceState, {wordPrecharged, translationSel}) => {
    return {...state, modal:{show:true, type:'new-example' as const, wordPrecharged, translationSel}}
  }),
  on(actions.modalModifyExample, (state:InterfaceState, {wordPrecharged, translationSel, exampleSel}) => {
    return {...state, modal:{show:true, type:'modify-example' as const, wordPrecharged, translationSel, exampleSel}}
  }),
  on(actions.modalDeleteExample, (state:InterfaceState, {wordPrecharged, translationSel, exampleSel}) => {
    return {...state, modal:{show:true, type:'delete-example' as const, wordPrecharged, translationSel, exampleSel}}
  })
)
