import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sku-with-builder',
  templateUrl: './form-sku-with-builder.component.html',
  styleUrls: ['./form-sku-with-builder.component.css']
})
export class FormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;
  productName: string;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      /*'sku': ['', Validators.compose([
        Validators.required, this.skuValidator
      ])]*/
      'productName': ['', Validators.required]
    });

    /*this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to: ', form);
      }
    );*/
   }

  ngOnInit() {
  }

  onSubmit(value: string): void { /*different from form: any hm*/
    console.log('You submitted value: ', value);
  }

  /*skuValidator(control: FormControl): { [s: string]: boolean} {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }*/

}
