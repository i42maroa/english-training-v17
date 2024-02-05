import { createReducer, on } from "@ngrx/store";
import * as actions from "../actions/words.actions";
import { PREDIFINED_WORD_STATE, WordState } from "../word.state";

export const initialState:WordState = PREDIFINED_WORD_STATE;

export const wordReducer = createReducer(
  initialState,

  on(actions.loadWords, (state) => {
    return {...state }
  }),
  on(actions.selectWord, (state, { id }) => {
    return {...state, selectWord: state.words.find(w => w._id === id) }
  }),

)
