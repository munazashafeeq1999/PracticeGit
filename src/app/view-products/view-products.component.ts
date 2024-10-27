import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  taskTitle = 'Practice Angular';
  isComplete = false;

  completeTask() {
    this.isComplete = true;
  }

  updateTitle(newTitle: string) {
    newTitle = 'Read cup of coffee';
    this.taskTitle = newTitle;
  }
}
