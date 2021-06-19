import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Icon from '../icon/icon';
import {AppRoute, IconType} from '../../const';

const Breadcrumbs = ({items}) => {

  return (
      <ul className="breadcrumbs">
        {items.map((item, i) => (
          <li key ={i + 1} className="breadcrumbs__item">
            {i === (items.length - 1) ?
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className="breadcrumbs__link" href="#">{item}</a> :
            <>
              <Link className="breadcrumbs__link" to={AppRoute.ROOT}>{item}</Link>
              <Icon icon={IconType.ARROW} />
            </>
          }
          </li>
        ))}
      </ul>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Breadcrumbs;
