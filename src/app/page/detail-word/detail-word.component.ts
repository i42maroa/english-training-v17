import { Component } from '@angular/core';
import { WORDS_TEST, WordInterface } from '../../shared/interfaces/word.interface';

@Component({
  selector: 'app-detail-word',
  standalone: true,
  imports: [],
  templateUrl: './detail-word.component.html',
  styleUrl: './detail-word.component.css'
})
export class DetailWordComponent {

  word:WordInterface = WORDS_TEST[0];
}
