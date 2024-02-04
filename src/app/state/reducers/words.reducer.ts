import { createReducer, on } from "@ngrx/store";
import { loadWords } from "../actions/words.actions";
import { PREDIFINED_WORD_STATE, WordState } from "../word.state";

export const initialState:WordState = PREDIFINED_WORD_STATE;

export const wordReducer = createReducer(
  initialState,

  on(loadWords, (state) => {
    return {...state }
  }),
)
