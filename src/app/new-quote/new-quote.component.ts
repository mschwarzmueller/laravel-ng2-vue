import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { QuotesService } from "../quotes.service";

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.quotesService.addQuote(form.value.content)
      .subscribe(
        () => {
          console.log('Created quote!');
          alert('Quote created!');
        }
      );
    form.reset();
  }
}
