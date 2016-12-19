import { Component } from '@angular/core';
import { Quote } from "../quote.interface";
import { QuotesService } from "../quotes.service";
import { Response } from "@angular/http";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes: Quote[] = [];

  constructor(private quotesService: QuotesService) {
  }

  onGetQuotes() {
    this.quotesService.getQuotes()
      .subscribe(
        (quotes: Quote[]) => {
          console.log(quotes);
          this.quotes = quotes;
        },
        (error: Response) => alert('Error: ' + error.json().message)
      );
  }

  onDeletedQuote(quote: Quote) {
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }
}
