import { Routes } from '@angular/router';
import { WordsComponent } from './page/words/words.component';
import { DetailWordComponent } from './page/detail-word/detail-word.component';

export const routes: Routes = [
  { path: '', component: WordsComponent },
  { path: 'detail/:word', component: DetailWordComponent },
];
