import ThingsJSC from './index.js';

describe('To-dos', () => {
  let todo = null;

  beforeEach(() => {
    const newTodo = {
      title: 'Buy milk',
    };  
    todo = ThingsJSC.todo(newTodo);
  });

  it('Should return a to-do', () => {
    expect(todo).toBeInstanceOf(ThingsJSC.Models.Todo)
  });

  it('Should encode to-do urls correctly', () => {
    const actualURL = 'things:///add-json?data=%5B%7B%22type%22:%22to-do%22,%22attributes%22:%7B%22title%22:%22Buy%20milk%22%7D%7D%5D';
    const url = ThingsJSC.url(todo);
    expect(url).toBe(actualURL);
  });

  it('Should be able to create checklists in to-dos', () => {
    const todoWithChecklist = {
      title: 'Research',
      checklistItems: [{
        title: 'Hotels',
        completed: true,
      }, 'Transport from airport'],
    };

    const todo = ThingsJSC.todo(todoWithChecklist);
    const url = ThingsJSC.url(todo);

    expect(url).toBe(url);

  });

  it('Should be able to create multiple to-dos', () => {
    const actualURL = 'things:///add-json?data=%5B%7B%22type%22:%22to-do%22,%22attributes%22:%7B%22title%22:%22Buy%20milk%22%7D%7D,%7B%22type%22:%22to-do%22,%22attributes%22:%7B%22title%22:%22Research%22,%22checklist-items%22:%5B%7B%22type%22:%22checklist-item%22,%22attributes%22:%7B%22title%22:%22Hotels%22,%22completed%22:true%7D%7D,%7B%22type%22:%22checklist-item%22,%22attributes%22:%7B%22title%22:%22Transport%20from%20airport%22%7D%7D%5D%7D%7D%5D';
    const todoWithChecklist = {
      title: 'Research',
      checklistItems: [{
        title: 'Hotels',
        completed: true,
      }, 'Transport from airport'],
    };

    const todo2 = ThingsJSC.todo(todoWithChecklist);
    const url = ThingsJSC.url([todo, todo2]);
    expect(url).toBe(actualURL);
  });
});

describe('Heading', () => {
  it('Should return a heading from a string', () => {
    const heading = 'Test Heading';
    expect(ThingsJSC.heading(heading)).toBeInstanceOf(ThingsJSC.Models.Heading);
    expect(ThingsJSC.heading(heading).attributes.title).toBe('Test Heading');
  });

  it('Should return a heading from an object', () => {
    const heading = {
      title: 'Testing Heading',
    };
    expect(ThingsJSC.heading(heading)).toBeInstanceOf(ThingsJSC.Models.Heading);
    expect(ThingsJSC.heading(heading).attributes.title).toBe('Testing Heading');
  });
});

describe('Projects', () => {
  let project = null;

  beforeEach(() => {
    const newProject = {
      title: 'Go Shopping'
    };
    project = ThingsJSC.project(newProject);
  });

  it('Should return a project', () => {
    expect(project).toBeInstanceOf(ThingsJSC.Models.Project);
  });

  it('Should create a valid project url', () => {
    const actualURL = 'things:///add-json?data=%5B%7B%22type%22:%22project%22,%22attributes%22:%7B%22title%22:%22Go%20Shopping%22%7D%7D%5D';
    const url = ThingsJSC.url(project);
    expect(url).toBe(actualURL);
  });

  it('Should be able to add items to a project', () => {
    const actualURL = 'things:///add-json?data=%5B%7B%22type%22:%22project%22,%22attributes%22:%7B%22title%22:%22Go%20Shopping%22,%22items%22:%5B%7B%22type%22:%22heading%22,%22attributes%22:%7B%22title%22:%22Dairy%22%7D%7D,%7B%22type%22:%22to-do%22,%22attributes%22:%7B%22title%22:%22Buy%20milk%22%7D%7D%5D%7D%7D%5D';
    const heading = ThingsJSC.heading('Dairy');
    
    const newTodo = {
      title: 'Buy milk',
    };  
    const todo1 = ThingsJSC.todo(newTodo);

    project.addItem(heading);
    project.addItem(todo1);

    const url = ThingsJSC.url(project);
    expect(url).toBe(actualURL);
  });

  it('Should be able to create mutliple projects', () => {
    const actualURL = 'things:///add-json?data=%5B%7B%22type%22:%22project%22,%22attributes%22:%7B%22title%22:%22Go%20Shopping%22%7D%7D,%7B%22type%22:%22project%22,%22attributes%22:%7B%22title%22:%22Vacation%20to%20Rome%22%7D%7D%5D';
    const newProject = {
      title: 'Vacation to Rome'
    };
    const project2 = ThingsJSC.project(newProject);
    const url = ThingsJSC.url([project, project2]);
    expect(url).toBe(actualURL);
  });

});

