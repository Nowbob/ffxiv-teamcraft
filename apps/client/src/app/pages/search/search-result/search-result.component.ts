import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchType } from '../search-type';
import { SearchResult } from '../../../model/search/search-result';
import { HtmlToolsService } from '../../../core/tools/html-tools.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent {

  @Input()
  row: SearchResult;

  @Input()
  odd: boolean;

  @Input()
  currentLang: string;

  @Output()
  addItemsToList = new EventEmitter();

  @Output()
  createQuickList = new EventEmitter();

  @Output()
  openInSimulator = new EventEmitter();

  @Output()
  selectedChange = new EventEmitter();

  @Input()
  selected: boolean;

  @Output()
  maxAmount = 999;

  @Output()
  minAmount = 1;

  searchTypes = SearchType;

  constructor(private htmlTools: HtmlToolsService) {
  }

  //Increment/Decrement nz-input-number value through mouse wheel
  public adjust(amount: number): void {
    this.row.amount += amount;
    if (this.row.amount >= this.maxAmount) {
      this.row.amount = this.maxAmount
    } else if (this.row.amount <= this.minAmount) {
      this.row.amount = this.minAmount
    }
  }

  public getStars(amount: number): string {
    return this.htmlTools.generateStars(amount);
  }

}
