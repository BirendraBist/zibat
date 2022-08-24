import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartService } from './services/cart.service';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthGuard } from '@zibat/users';


const routes: Routes = [
  {
    path: 'cart',
    component: CartPageComponent
  },
  {

    path: 'checkout',
    canActivate:[AuthGuard],
    component: CheckoutComponent
  },
  {
    path: 'success',
    component: ThankYouComponent
  }
];


@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes),
    BadgeModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule


  ],
  providers: [],
  declarations: [
    CartIconComponent,
    CartPageComponent,
    OrderSummaryComponent,
    ThankYouComponent,
    CheckoutComponent
  ],
  exports: [
    CartIconComponent,
    CartPageComponent,
    OrderSummaryComponent,
    ThankYouComponent,
    CheckoutComponent
  ]
})
export class OrdersModule {
  constructor(cartService: CartService) {
    cartService.initCartLocalStorage();

  }
}
