import { QuestionBase } from './';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: any[] = [];
  source: string;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.source = options['source'] || '';
  }
}
