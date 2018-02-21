export default class BaseModel {
  constructor(type = '') {
    this.type = type;
    this.attributes = {};
  }

  init() {
    Object.keys(this.attributes).forEach((key) => {
      if (!this.attributes[key]) {
        delete this.attributes[key];
      }
    });

    return this;
  }

  make(model, items = []) {
    return items.length > 0 ? items.map(item => new model(item)) : null;
  }

}
