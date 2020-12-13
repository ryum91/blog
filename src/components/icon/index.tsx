import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';

import {
  faCss3Alt,
  faFacebook,
  faGithub,
  faHtml5,
  faLinkedin,
  faNode,
  faJava,
  faReact,
  faTwitter,
  faVuejs,
  faJsSquare
} from '@fortawesome/free-brands-svg-icons';
import './style.scss';

library.add(
  faFacebook,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faNode,
  faJava,
  faReact,
  faTwitter,
  faVuejs,
  faLinkedin
);

interface Props {
  name: IconName;
  title: string;
}

export const Icon = ({ name, title }: Props) => (
  <div className="icon" title={title}>
    <FontAwesomeIcon icon={['fab', name as IconName]} />
  </div>
);
