# Things 3.4 JSON Coder

[![Build Status](https://travis-ci.org/seripap/things-json.svg?branch=master)](https://travis-ci.org/seripap/things-json) [![codecov](https://codecov.io/gh/seripap/things-json/branch/master/graph/badge.svg)](https://codecov.io/gh/seripap/things-json)

This builds a valid Things URL to interact with Things app for Mac v3.4. [Read more](https://support.culturedcode.com/customer/en/portal/articles/2803573).

## Getting Started

Installation

```bash
$ npm install things-json
```

Inclusion

```js
import ThingsJSC from 'things-json';
```

For documentation and references, [see the official docs](https://support.culturedcode.com/customer/en/portal/articles/2803573).

## API

See examples in `src/spec.js`.

- `.todo(options)`: object; Creates a new to-do item
- `.project(options)`: object; Creates a new project item
- `.heading(options)`: string or object; Creates a new heading item.
- `.url(item)`: instance (or instances) of `todo` or `project`; converts item to an encoded URL for use. Accepts an array of items.

### To-do

- `title`: string; title of to-do
- `notes`: string; text for notes (max 10K)
- `when`: string or date; `today`, `tomorrow`, `evening`, `anytime`, `someday`
- `deadline`: date
- `tags`: array of strings
- `checklist`: array; strings or checklistItem
- `listId`: string
- `heading`: string or object of headingItem
- `completed`: boolean
- `canceled`: boolean

```js
const todo1 = {
    title: 'Pick up dry cleaning',
    when: 'today',
};

const todo2 = {
    title: 'Pack for vacation',
    checklist: ["Camera", "Passport"],
};

const todo1Obj = ThingsJSC.todo(todo1);
const todo2Obj = ThingsJSC.todo(todo2);

const url1 = ThingsJSC.url(todo1Obj);
const url2 = ThingsJSC.url(todo2Obj);

// Or combine URLs
const urls = ThingsJSC.url([todo1Obj, todo2Obj]);
```

### Project

- `title`: string; title of to-do
- `notes`: string; text for notes (max 10K)
- `when`: string or date; `today`, `tomorrow`, `evening`, `anytime`, `someday`
- `deadline`: date
- `tags`: array of strings
- `checklist`: array; strings or checklistItem
- `areaId`: string
- `area`: string
- `items`: array of to-do or headingItem
- `completed`: boolean
- `canceled`: boolean


```js

const newProject = {
    title: 'Go Shopping',
};

const project = ThingsJSC.project(newProject);
const url = ThingsJSC.url(project);

```

#### Project.addItem(item)

- `item`: Heading or To-Do

```js
const newTodo = {
    title: 'Buy mulk',
};
const newProject = {
    title: 'Go Shopping',
};

const project = ThingsJSC.project(newProject);
const todo = ThingsJSC.todo(newTodo);

project.addItem(todo);

const url = ThingsJSC.url(project);
```

### checklistItem

- `title`: string; title of to-do
- `completed`: boolean
- `canceled`: boolean

### headingItem

- `title`: string; title of to-do
- `archived`: boolean

```js

const heading = {
    title: 'New Heading',
}

const heading = ThingsJSC.heading(heading);

```
