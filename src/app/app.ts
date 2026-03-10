import { Component } from '@angular/core';
import {Header} from "./header/header";
import {InvestmentInputs} from "./investment-inputs/investment-inputs";
import {InvestmentResults} from "./investment-results/investment-results";
import {EmptyResults} from "./empty-results/empty-results";

@Component({
  selector: 'app-root',
  imports: [Header, InvestmentInputs, InvestmentResults, EmptyResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
