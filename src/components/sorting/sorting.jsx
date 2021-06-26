import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSorting} from '../../store/slice';
import Menu from '../menu/menu';
import Icon from '../icon/icon';
import {parseDataToArrayOfValues} from '../../utils';
import {SortingType, SortingOrder, IconType} from '../../const';

const Sorting = () => {

  const dispatch = useDispatch();
  const sorting = useSelector((state) => state.sorting);

  const SORTING_ITEMS = parseDataToArrayOfValues(SortingType, `title`);

  const SORTING_TOGGLE_ITEMS = Object.values(SortingOrder);

  const handleSortingMenuItem = useCallback(
    (evt) => {
      evt.preventDefault();

      switch(evt.target.innerText) {
        case SortingType.PRICE.title:
          dispatch(setSorting({order: sorting.order ? sorting.order : SortingOrder.ASCENDING.type, type: SortingType.PRICE.type}))
        break;
        case SortingType.RATING.title:
          dispatch(setSorting({order: sorting.order ? sorting.order : SortingOrder.ASCENDING.type, type: SortingType.RATING.type}))
        break;
        default:
        break;
      }
    }, [dispatch, sorting]
  );

  const handleSortingToggleItem = useCallback(
    (evt) => {
      evt.preventDefault();

      switch(evt.target.id) {
        case SortingOrder.DESCENDING.type:
          dispatch(setSorting({type: sorting.type ? sorting.type : SortingType.PRICE.type, order: SortingOrder.DESCENDING.type}))
        break;
        case SortingOrder.ASCENDING.type:
          dispatch(setSorting({type: sorting.type ? sorting.type : SortingType.PRICE.type, order: SortingOrder.ASCENDING.type}))
        break;
        default:
        break;
      }
    }, [dispatch, sorting]
  );

  return (
      <div className="catalogue__sorting">
        <p className="catalogue__sorting-title">Сортировать:</p>
        <Menu type={`sorting`} items={SORTING_ITEMS} activeItem={sorting.type && SortingType[sorting.type.toUpperCase()].title} 
          onItemClick={handleSortingMenuItem} />
        <div className="catalogue__sorting-toggles">
          {SORTING_TOGGLE_ITEMS.map((item, i) => (
        <button key ={i + 1} id={item.type} className={`catalogue__sorting-toggle ${sorting.order && sorting.order === item.type ? `catalogue__sorting-toggle--active` : ``}`} 
          type="button" aria-label={item.title} onClick={handleSortingToggleItem}>
          <Icon icon={IconType[`${item.icon.toUpperCase()}`]} />
        </button>
          ))}
        </div>
      </div>
  );
};

export default Sorting;
