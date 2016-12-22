import { expect } from '../../test_helper';

import {
  Types,
  saveComment
} from '../../../src/modules/comments/actions';

describe('comments actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(Types.COMMENT_SAVE);
    });

    it('has the correct payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).to.equal('new comment');
    });
  });
});
