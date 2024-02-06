import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InterfaceState } from "../interface.state";

export const selectWordsFeature = createFeatureSelector<InterfaceState>(`interface`);

export const selectShowAddButton = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.showAddButton
)

export const selectModal = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.modal
)

export const selectShowModal = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.modal.show
)

export const selectTypeModal = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.modal.type
)

export const selectPrechargedModalWord = createSelector(
  selectWordsFeature,
  (state:InterfaceState) => state.modal.wordPrecharged
)
