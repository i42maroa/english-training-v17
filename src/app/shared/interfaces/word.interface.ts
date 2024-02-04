export type WordType = 'adj' | 'noun' | 'adv' | 'verb' | 'phrasal';

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
