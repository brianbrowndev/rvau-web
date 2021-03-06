import { Validators } from '@angular/forms';

export class QuestionBase<T>{
  value: any; // form value
  key: string; // table key name
  label: string; // form label
  alias: string; // key alias
  placeholder: string; // input placeholder text
  required: boolean; // required field
  filter: boolean; // field allows filtering
  order: number; // order in form questions
  controlType: string; // ??
  validators: any[]; // form validation
  validationMessages: { [key: string]: string }; // error messages from validation
  constructor(options: {
    value?: any,
    key?: string,
    label?: string,
    alias?: string,
    placeholder?: string,
    required?: boolean,
    filter?: boolean,
    order?: number,
    controlType?: string,
    validators?: Array<Function>,
    validationMessages?: { [key: string]: string }
  } = {}) {
    this.value = options.value || '';
    this.key = options.key || '';
    this.label = options.label || '';
    this.alias = options.alias || options.key || '';
    this.placeholder = options.placeholder || '';
    this.required = !!options.required;
    this.filter = !!options.filter;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.validationMessages = options.validationMessages || {};
    this.validators = options.validators || [];
    if (this.required === true) {
      this.validators.push(Validators.required);
    }
  }
}

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

export class CheckboxQuestion extends QuestionBase<string> {
  controlType = 'checkbox';
  checked: boolean;
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.checked = false;
  }
}

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: any[] = [];
  source: string; // table source for querying default values

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.source = options['source'] || '';
  }
}
