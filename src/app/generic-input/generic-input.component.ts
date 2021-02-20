import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Self,
  Optional,
  forwardRef
} from "@angular/core";
import {
  ControlValueAccessor,
  Validator,
  AbstractControl,
  ValidatorFn,
  Validators,
  NgControl
} from "@angular/forms";

@Component({
  selector: "app-generic-input",
  templateUrl: "./generic-input.component.html",
  styleUrls: ["./generic-input.component.scss"]
})
export class GenericInputComponent
  implements ControlValueAccessor, Validator, OnInit {
  @ViewChild("input") input: ElementRef;
  disabled;

  @Input() type = "text";
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  @Input() validatorFns: ValidatorFn[];

  isRequired = () =>
    this.validatorFns && this.validatorFns.includes(Validators.required);

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator
      ? [control.validator]
      : [];

    if (this.validatorFns)
      for (const validatorFn of this.validatorFns) validators.push(validatorFn);

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  onChange(event) {}

  onTouched() {}

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const validators: ValidatorFn[] = [];

    if (this.validatorFns)
      for (const validatorFn of this.validatorFns) validators.push(validatorFn);

    return validators;
  }
}
