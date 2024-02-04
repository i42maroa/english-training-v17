import { createAction, props } from "@ngrx/store";
import { WordInterface } from "../../shared/interfaces/word.interface";

export const loadWords = createAction('[Word list] Load words');
export const retrieveWordList = createAction('[Word list] retrieve words success', props<{words: ReadonlyArray<WordInterface>}>());
export const loadWordsError = createAction('[Word list] Load words error', props<{error:any}>());
