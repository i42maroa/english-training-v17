import { createAction, props } from "@ngrx/store";
import { WordInterface } from "../../shared/interfaces/word.interface";

export const selectWord = createAction('[Word list] Select word', props<{id:string}>());

export const loadWords = createAction('[Word list] Load words');
export const retrieveWordList = createAction('[Word list] retrieve words success', props<{words: ReadonlyArray<WordInterface>}>());
export const loadWordsError = createAction('[Word list] Load words error', props<{error:any}>());
