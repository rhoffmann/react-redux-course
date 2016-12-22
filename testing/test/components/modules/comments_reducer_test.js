import { expect } from '../../test_helper';

import { Types } from '../../../src/modules/comments/actions';
import commentReducer from '../../../src/modules/comments/reducer';

describe('comments reducer', () => {
  it('handles action with unknown type', () => {
    // expect(commentReducer()).to.be.instanceof(Array);
    // expect(commentReducer().length).to.equal(0);
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type COMMENT_SAVE', () => {
    const action = {
      type: Types.COMMENT_SAVE,
      payload: 'new comment'
    };

    expect(commentReducer(['initial comment'], action)).to.eql([
      'initial comment', 'new comment'
    ]);
  });
});
