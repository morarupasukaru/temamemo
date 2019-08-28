import { Component, OnInit, Input } from '@angular/core';
import { FlashcardItemType } from '../../../models/flashcard-item-type';
import { FlashcardItem } from '../../../models/flashcard-item';

@Component({
  selector: 'app-flashcard-item',
  templateUrl: './flashcard-item.component.html',
  styleUrls: ['./flashcard-item.component.css']
})
export class FlashcardItemComponent implements OnInit {

  @Input() item: FlashcardItem;
  type: FlashcardItemType;

  constructor() { }

  ngOnInit() {
  }

}
