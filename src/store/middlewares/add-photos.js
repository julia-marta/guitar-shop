
export const addPhotos = (_store) => (next) => (action) => {

  if (action.type === `guitar-shop/getData/fulfilled`) {
    console.log(action.payload);
  }

  return next(action);
};
