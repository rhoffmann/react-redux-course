import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import _$ from 'jquery';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/modules/rootReducer';
import chaiJquery from 'chai-jquery';


global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);


function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(rootReducer, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // produces HTML wrapped in jquery
  return $(ReactDOM.findDOMNode(componentInstance));
}


$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this.get(0), value);
};


chaiJquery(chai, chai.util, $);


export { renderComponent, expect };
