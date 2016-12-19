import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesService } from "./quotes.service";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    NewQuoteComponent,
    QuoteComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
