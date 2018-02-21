import BaseModel from './Base.js';
import ChecklistItem from './ChecklistItem.js';
import Heading from './Heading.js';

export default class Todo extends BaseModel {
  constructor(options = {}) {
    super('to-do');
    this.attributes = {
      title: options.title,
      notes: options.notes,
      when: options.when,
      deadline: options.deadline,
      tags: options.tags,
      'checklist-items': this.make(ChecklistItem, options.checklistItems),
      listId: options.listId,
      list: options.list,
      heading: this.make(Heading, options.heading),
      completed: options.completed,
      canceled: options.canceled,
    }
    this.init();
  }

}
