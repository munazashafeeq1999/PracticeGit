import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuickKartApp';
}
