import * as _ from 'lodash';

export class Todo {
  id: number;
  task = '';
  complete = false;

  constructor(values: Object = {}) {
    _.merge(this, values);
  }
}
