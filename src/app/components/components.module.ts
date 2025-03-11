import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CreditCardComponent } from "./credit-card/credit-card.component";
import { TransactionsListComponent } from "./transactions-list/transactions-list.component";
import { TransactionCardComponent } from "./transaction-card/transaction-card.component";

@NgModule({
  declarations: [CreditCardComponent, TransactionsListComponent, TransactionCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [CreditCardComponent, TransactionsListComponent, TransactionCardComponent]
})
export class ComponentsModule {}
