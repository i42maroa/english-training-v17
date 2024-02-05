import { WORDS_TEST, WordInterface } from "../shared/interfaces/word.interface"

export interface WordState{
  words:ReadonlyArray<WordInterface>,
  loading:boolean,
  selectWord?:WordInterface
}

export const PREDIFINED_WORD_STATE:WordState = {
  words:WORDS_TEST,
  loading:false
}
