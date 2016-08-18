export const Types = {
  SELECT_BOOK: 'SELECT_BOOK'
};

export const selectBook = (book) => ({
  type: Types.SELECT_BOOK,
  payload: book
});
