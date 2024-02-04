import { createReducer, on } from "@ngrx/store";
import { modalAddWord } from "../actions/interface.actions";
import { InterfaceState, PREDIFINED_INTERFACE_STATE } from "../interface.state";


export const initialState:InterfaceState = PREDIFINED_INTERFACE_STATE;

export const interfaceReducer = createReducer(
  initialState,
  on(modalAddWord, (state) => {
    return {...state }
  }),
)
