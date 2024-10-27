import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import { ViewProductsComponent } from './app/view-products/view-products.component';

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));


//bootstrapApplication(ViewProductsComponent, appConfig)
  //.catch((err) => console.error(err));
