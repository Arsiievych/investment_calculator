import {Component, Input} from '@angular/core';
import {InvestmentInputModel} from "../investment-inputs/investment-input.model";

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  @Input({required: true}) investmentInputModel!: InvestmentInputModel;
}
