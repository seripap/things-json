import BaseModel from './Base.js';
import Heading from './Heading.js';

export default class Project extends BaseModel {
  constructor(options = {}) {
    super('project');
    this.attributes = {
      title: options.title,
      notes: options.notes,
      when: options.when,
      deadline: options.deadline,
      tags: options.tags,
      'area-id': options.areaId,
      area: options.area,
      items: options.items,
      completed: options.completed,
      canceled: options.canceled,
    }
    this.init();
  }

  addItem(item) {
    const { items = [] } = this.attributes;
    items.push(item);
    this.attributes.items = items;
    return this;
  }

}
