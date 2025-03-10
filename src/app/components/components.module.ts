import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CreditCardComponent } from "./credit-card/credit-card.component";

@NgModule({
  declarations: [CreditCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [CreditCardComponent]
})
export class ComponentsModule {}
