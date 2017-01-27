import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuotesComponent } from "./quotes/quotes.component";
import { NewQuoteComponent } from "./new-quote/new-quote.component";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";

const APP_ROUTES: Routes = [
  { path: '', component: QuotesComponent },
  { path: 'new-quote', component: NewQuoteComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
