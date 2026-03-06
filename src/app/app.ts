import { Component } from '@angular/core';
import {Header} from "./header/header";
import {InvestmentInputs} from "./investment-inputs/investment-inputs";
import {InvestmentResults} from "./investment-results/investment-results";
import {InvestmentInputModel} from "./investment-inputs/investment-input.model";
import {InvestmentCalculatorService} from "./investment-results/investment-calculator.service";
import {InvestmentOutputModelArray} from "./investment-results/investment-output.model";

@Component({
  selector: 'app-root',
  imports: [Header, InvestmentInputs, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  investmentResults: InvestmentOutputModelArray = [];

  constructor(private readonly investmentCalculatorService: InvestmentCalculatorService) {}

  onInputSubmit(investmentInput: InvestmentInputModel) {
    this.investmentResults = this.investmentCalculatorService.calculateInvestmentResults(investmentInput);
  }
}
