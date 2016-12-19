import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuotesService } from "../quotes.service";
import { Quote } from "../quote.interface";

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

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
  }

  onEditQuote() {
    this.editing = true;
    this.editValue = this.quote.content;
  }

  onCancel() {
    this.editValue = '';
    this.editing = false;
  }

  onUpdateQuote() {
    this.quotesService.updateQuote(this.quote.id, this.editValue)
      .subscribe(
        () => {
          console.log('Updated quote!');
          this.quote.content = this.editValue;
          this.editValue = '';
        }
      );
    this.editing = false;
  }

  onDeleteQuote() {
    this.quotesService.deleteQuote(this.quote.id)
      .subscribe(
        () => console.log('Deleted quote!')
      );
    this.quoteDeleted.emit(this.quote);
  }

}
