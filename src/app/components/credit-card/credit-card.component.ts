import { Component, Input, OnInit, signal } from '@angular/core';

import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
  standalone: false
})
export class CreditCardComponent  implements OnInit {

  @Input() type: string | undefined
  @Input() value: number = 0
  @Input() title: string | undefined
  @Input() last_modify: Date | undefined

  constructor() {}

  ngOnInit() {}

  get cardClass() {
    return this.type === 'entradas' ?
      'credit-card card-entradas' : this.type === 'saidas' ? 'credit-card card-saidas' : 'credit-card'
  }

  get formattedValue() {
    const prefix = this.type === 'entradas' ? '+' : this.type === 'saidas' ? '-' : ''
    return prefix + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.value)
  }

}
