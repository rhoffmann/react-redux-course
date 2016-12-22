import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  COMMENT_SAVE
`);

// action creators
export const saveComment = (comment) => {
  return {
    type: Types.COMMENT_SAVE,
    payload: comment
  };
};
