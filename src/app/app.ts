import { Component } from '@angular/core';
import {Header} from "./header/header";
import {InvestmentInputs} from "./investment-inputs/investment-inputs";
import {InvestmentResults} from "./investment-results/investment-results";
import {InvestmentInputModel} from "./investment-inputs/investment-input.model";

@Component({
  selector: 'app-root',
  imports: [Header, InvestmentInputs, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  investmentInputModel: InvestmentInputModel = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };

  onInputSubmit(investmentInput: InvestmentInputModel) {
    this.investmentInputModel = investmentInput;
  }
}
