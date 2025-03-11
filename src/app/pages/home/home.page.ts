import { Component, OnInit, Signal } from '@angular/core';
import { CreditCardsService } from '../../services/credit-cards.service';
import { creditCard } from 'src/app/interfaces/credit-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  cardsList: Signal<creditCard[]>

  constructor(private creditCardsService: CreditCardsService) {
    this.cardsList = this.creditCardsService.getCardList()
  }

  ngOnInit() {
  }

}
