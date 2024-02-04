import { ActionReducerMap } from "@ngrx/store";
import { wordReducer } from "./reducers/words.reducer";
import { interfaceReducer } from "./reducers/interface.reducer";
import { WordState } from "./word.state";
import { InterfaceState } from "./interface.state";

export interface AppState {
  words: WordState,
  interface: InterfaceState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  words: wordReducer,
  interface: interfaceReducer
}
