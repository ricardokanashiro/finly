import { Injectable, signal } from '@angular/core';
import { creditCard } from '../interfaces/credit-card';

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {

  private cardsList = signal<creditCard[]>([
    { title: "Total", value: 420000, type: "total", last_modify: new Date() },
    { title: "Entradas", value: 420000, type: "entradas", last_modify: new Date() },
    { title: "Saidas", value: 420000, type: "saidas", last_modify: new Date() }
  ])

  constructor() { }

  public getCardList() {
    return this.cardsList.asReadonly()
  }
}
