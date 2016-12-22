import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = {};
    const state = {
      comments: ['new comment', 'other comment']
    };

    component = renderComponent(CommentList, props, state);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-list');
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('other comment');
  });
});
