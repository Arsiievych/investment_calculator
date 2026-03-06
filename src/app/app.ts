import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from "./header/header";
import {InvestmentInputs} from "./investment-inputs/investment-inputs";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, InvestmentInputs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('investment_calculator');
}
