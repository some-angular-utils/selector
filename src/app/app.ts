import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SauOptions, SauSelector } from "@some-angular-utils/selector"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SauSelector],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'selector';

  public options: SauOptions = [
    {
      value: 'hola',
      label: 'hola'
    },
    {
      value: 'adios',
      label: 'adios'
    },
    {
      value: 'hasta_luego',
      label: 'hasta_luego'
    }
  ]

}
