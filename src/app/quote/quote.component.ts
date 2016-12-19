import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Quote } from "../quote.interface";
import { QuoteService } from "../quote.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;
  @Output() quoteDeleted = new EventEmitter<Quote>();
  editing = false;
  editValue = '';

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  onEdit() {
    this.editing = true;
    this.editValue = this.quote.content;
  }

  onUpdate() {
    this.quoteService.updateQuote(this.quote.id, this.editValue)
      .subscribe(
        (quote: Quote) => {
          this.quote.content = this.editValue;
          this.editValue = '';
        }
      );
    this.editing = false;
  }

  onCancel() {
    this.editValue = '';
    this.editing = false;
  }

  onDelete() {
    this.quoteService.deleteQuote(this.quote.id)
      .subscribe(
        () => {
          this.quoteDeleted.emit(this.quote);
          console.log('Quote deleted');
        }
      );
  }

}
