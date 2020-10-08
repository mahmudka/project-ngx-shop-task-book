import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'ngx-shop-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass'],
})
export class OrderFormComponent {
  @Output()
  public confirm: EventEmitter<FormData> = new EventEmitter<FormData>();

  public form: FormGroup = this._fb.group({
    name: ['Джон Сина', [Validators.required]],
    telephone: ['+44 7911 123456', [Validators.required, this.phoneValidator]],
    email: ['john@gmail.com', [Validators.email, Validators.required]],
    address: ['Рымарская 25', [Validators.required]],
  });

  constructor(private readonly _fb: FormBuilder) {}
  public submit(): void {
    if (this.form.valid) {
      this.confirm.emit(this.form.value);
      this.form.reset();
    } else {
      this.form.setErrors({
        email: this.form.get('email')?.errors,
        telephone: this.form.get('telephone')?.errors,
        name: this.form.get('name')?.errors,
      });
    }
  }
  public phoneValidator(control: FormControl): ValidationErrors | null {
    const phone = control.value;
    return phone && phone.substring(0, 1) === '+' && phone.length >= 13
      ? null
      : {
          isNotMatch: true,
          error: 'Телефон должен быть в формате +44 7911 123456',
        };
  }
}
