import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInputModel} from "./investment-input.model";

@Component({
    selector: 'app-investment-inputs',
    imports: [FormsModule],
    templateUrl: './investment-inputs.html',
    styleUrl: './investment-inputs.css',
})
export class InvestmentInputs {
    initialInvestment: number | null = null;
    annualInvestment: number | null = null;
    expectedReturn: number | null = null;
    duration: number | null = null;

    @Output() inputChanged = new EventEmitter<InvestmentInputModel>();

    onSubmit() {
        if (
            this.initialInvestment === null ||
            this.annualInvestment === null ||
            this.expectedReturn === null ||
            this.duration === null
        ) {
            return;
        }

        this.inputChanged.emit({
            initialInvestment: this.initialInvestment,
            annualInvestment: this.annualInvestment,
            expectedReturn: this.expectedReturn,
            duration: this.duration
        });
    }
}
