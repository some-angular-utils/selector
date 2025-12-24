import { Component, Input } from '@angular/core';
import { SauOptions } from '../public-api';

@Component({
  selector: 'sau-selector',
  imports: [],
  templateUrl: 'selector.html',
  styleUrl: 'selector.scss'
})
export class SauSelector {

  @Input() options: SauOptions = []

}
