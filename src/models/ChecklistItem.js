import BaseModel from './Base.js';

export default class ChecklistItem extends BaseModel {
  constructor(options = {}) {
    super('checklist-item');
    let title = options;
    let completed = null;
    
    if (typeof options === 'object') {
      title = options.title;
      completed = options.completed;
    }

    this.attributes = {
      title,
      completed,
    }
    this.init();
  }
}
