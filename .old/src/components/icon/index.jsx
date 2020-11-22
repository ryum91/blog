import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-brands-svg-icons';
import './style.scss';

library.add(...Object.values(icons).filter((e) => e.icon));

const Icon = ({ name, className }) => {
  const classValue = ['icon'];

  if (className) {
    classValue.push(className);
  }
  return (
    <div className={classValue.join(' ')} title={name}>
      <FontAwesomeIcon icon={['fab', name]} />
    </div>
  );
};

export default Icon;
