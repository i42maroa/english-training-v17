export type WordType = 'adj' | 'noun' | 'adv' | 'verb' | 'phVb' | 'exp';

export interface WordExample{
  phrase:string;
  explanation?: string;
}

export interface WordDefinition{
  type: WordType;
  translation:string;
  explanation?: string;
  examples: WordExample[];
}

export interface WordInterface {
  _id:string;
  name:string;
  pronuntation?: string;
  date:Date;
  lastModificationDate:Date;
  definition: WordDefinition[];
}


export const WORDS_TEST:WordInterface[]=[
  {
    _id: "1",
    name:'car',
    pronuntation:'\'ka:',
    date:new Date(),
    lastModificationDate:new Date(),
    definition:[
      {
        type:'noun',
        translation:"coche",
        explanation:"coche de cuatro ruedas",
        examples:[
          {
            phrase:'The car stopped on the second floor'
          }
        ]
      }
    ]
  }
]


export const WORD_TYPE: {label:string; value:WordType}[] = [
  { label: 'NOUN', value: 'noun' },
  { label: 'VERB', value: 'verb' },
  { label: 'ADJ', value: 'adj' },
  { label: 'PHRASAL_VERB', value: 'phVb' },
  { label: 'EXPRESION', value: 'exp' },
]
