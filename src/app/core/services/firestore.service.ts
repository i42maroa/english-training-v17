import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { WordInterface } from '../../shared/interfaces/word.interface';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:Firestore) {


   }

   addWord(word: WordInterface){
    const wordRef = collection(this.firestore, 'words');
    return addDoc(wordRef, word);
   }

   getWords(): Observable<WordInterface[]>{
    const wordRef = collection(this.firestore, 'words');
    return collectionData(wordRef, {idField: 'id'}) as Observable<WordInterface[]>;
   }

}
