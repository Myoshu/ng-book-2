import { Component } from '@angular/core';
import { FormSkuComponent } from './form-sku/form-sku.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormSkuComponent;
}
