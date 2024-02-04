import { createAction, props } from "@ngrx/store";
import { WordInterface } from "../../shared/interfaces/word.interface";

export const modalNewWord = createAction('[Modal word] new word');
export const modalModifyWord = createAction('[Modal word] modify word', props<{wordPrecharged:WordInterface}>());
export const modalDeleteWord = createAction('[Modal word] delete word', props<{wordPrecharged:WordInterface}>());

export const modalNewTranslation = createAction('[Modal word] new translation', props<{wordPrecharged:WordInterface}>());
export const modalModifyTranslation = createAction('[Modal word] modify translation', props<{wordPrecharged:WordInterface, translationSel:number}>());
export const modalDeleteTranslation = createAction('[Modal word] delete translation', props<{wordPrecharged:WordInterface, translationSel:number}>());

export const modalNewExample = createAction('[Modal word] new example', props<{wordPrecharged:WordInterface, translationSel:number}>());
export const modalModifyExample = createAction('[Modal word] modify example', props<{wordPrecharged:WordInterface, translationSel:number, exampleSel:number}>());
export const modalDeleteExample = createAction('[Modal word] delete example', props<{wordPrecharged:WordInterface, translationSel:number, exampleSel:number}>());

