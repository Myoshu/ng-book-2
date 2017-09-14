import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-sku-with-builder',
  templateUrl: './form-sku-with-builder.component.html',
  styleUrls: ['./form-sku-with-builder.component.css']
})
export class FormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
   }

  ngOnInit() {
  }

  onSubmit(value: string): void { /*different from form: any hm*/
    console.log('You submitted value: ', value);
  }

}
