import {Component, Input} from '@angular/core';
import {InvestmentInputModel} from "../investment-inputs/investment-input.model";
import {InvestmentCalculatorService} from "./investment-calculator.service";

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  @Input({required: true}) investmentInputModel!: InvestmentInputModel;

  constructor(private investmentCalculatorService: InvestmentCalculatorService) {}

  investmentResults() {
    return this.investmentCalculatorService.calculateInvestmentResults(this.investmentInputModel);
  }
}
