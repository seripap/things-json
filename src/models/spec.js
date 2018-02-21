import BaseModel from './Base.js';

describe('Base Model', () => {
  let model = null;

  beforeEach(() => {
    model = new BaseModel();
  });

  it('Should have type and attributes', () => {
    expect(model.type).toBeDefined();
    expect(model.attributes).toBeDefined();
  })

  it('Should remove empty attributes when init() is called', () => {
    model.attributes.test = 'I am here';
    model.attributes.shouldNotExist = null;
    expect(model.attributes.shouldNotExist).toBeDefined();
    model.init();

    expect(model.attributes.test).toBeDefined();
    expect(model.attributes.shouldNotExist).toBeUndefined();
  });

  it('Should have the ability to make models from a list', () => {
    const NewModel = class { constructor(data) { this.test = data }  }
    const items = ['a','b','c'];

    const modeledItems = model.make(NewModel, items);

    modeledItems.map(item => expect(item).toBeInstanceOf(NewModel));
  });
});
