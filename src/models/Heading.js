import BaseModel from './Base.js';

export default class Heading extends BaseModel {
  constructor(options = {}) {
    super('heading');
    let title = options;
    let archived = null;
    
    if (typeof options === 'object') {
      title = options.title;
      archived = options.archived;
    }

    this.attributes = {
      title,
      archived,
    }
    this.init();
  }
}
