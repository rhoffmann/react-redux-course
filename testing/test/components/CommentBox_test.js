import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  })

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('text input', () => {
    let ta;

    beforeEach(() => {
      ta = component.find('textarea');
      ta.simulate('change', 'new comment!');
    });

    it('shows text that is entered', () => {
      expect(ta).to.have.value('new comment!');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(ta).to.have.value('');
    });
  })

});
