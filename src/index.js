import Models from './models/index.js';

const _base = 'things:///add-json?data=';

function _buildUrl(models = []) {
  return encodeURI(JSON.stringify(models));
}

function todo(options) {
  return new Models.Todo(options);
}

function project(options) {
  return new Models.Project(options);
}

function heading(options) {
  return new Models.Heading(options);
}

function url(models = []) {
  const modelsToBuild = Array.isArray(models) ? models : [models];
  return _base + _buildUrl(modelsToBuild);
}

export default {
  todo,
  project,
  heading,
  url,
  Models,
}
