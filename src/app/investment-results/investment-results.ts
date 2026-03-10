import {Component} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {InvestmentCalculatorService} from "./investment-calculator.service";
import {EmptyResults} from "../empty-results/empty-results";

@Component({
    selector: 'app-investment-results',
    imports: [
        CurrencyPipe,
        EmptyResults
    ],
    templateUrl: './investment-results.html',
    styleUrl: './investment-results.css',
})
export class InvestmentResults {
    constructor(private readonly investmentCalculatorService: InvestmentCalculatorService) {
    }

    get investmentResultsData() {
        return this.investmentCalculatorService.resultData;
    }
}
