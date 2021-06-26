import {GuitarImage} from '../../const';

export const addPhotos = (_store) => (next) => (action) => {

  if (action.type === `guitar-shop/getData/fulfilled`) {

    action.payload.map((item) => {
      return item.image = GuitarImage[item.code] ? GuitarImage[item.code] : GuitarImage[item.type];
    })
  }

  return next(action);
};
