import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Quote } from "./quote.interface";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class QuotesService {
  constructor(private http: Http) {}

  getQuotes(): Observable<Quote[]> {
    return this.http.get('http://laravel-ng2-vue.dev/api/quotes')
      .map(
        (response: Response) => response.json().quotes
      );
  }

  addQuote(content: string): Observable<any> {
    const quote: Quote = {
      id: null,
      content: content
    };
    return this.http.post('http://laravel-ng2-vue.dev/api/quote', JSON.stringify(quote), {headers: new Headers({'Content-Type': 'application/json'})});
  }

  deleteQuote(id: number): Observable<any> {
    return this.http.delete('http://laravel-ng2-vue.dev/api/quote/' + id);
  }

  updateQuote(id: number, content: string): Observable<any> {
    const body = {
      content: content
    };
    return this.http.put('http://laravel-ng2-vue.dev/api/quote/' + id, JSON.stringify(body), {headers: new Headers({'Content-Type': 'application/json'})});
  }
}
