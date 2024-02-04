import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WordState } from "../word.state";

export const selectWordsFeature = createFeatureSelector<WordState>(`words`);

export const listWords = createSelector(
    selectWordsFeature,
    (state:WordState) => state.words
)
