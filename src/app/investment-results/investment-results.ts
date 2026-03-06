import {Component, Input} from '@angular/core';
import {InvestmentOutputModelArray} from "./investment-output.model";

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  @Input({required: true}) investmentResults!: InvestmentOutputModelArray;
}
