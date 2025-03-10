import { Component, Input, OnInit } from '@angular/core';

import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
  standalone: false
})
export class CreditCardComponent  implements OnInit {

  @Input() type = ''

  value = 420000

  constructor() { }

  ngOnInit() {}

  get cardClass() {
    return this.type === 'entradas' ?
      'credit-card card-entradas' : this.type === 'saidas' ? 'credit-card card-saidas' : 'credit-card'
  }

  getFormattedValue() {
    const prefix = this.type === 'entradas' ? '+' : this.type === 'saidas' ? '-' : ''
    return prefix + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.value)
  }

}
