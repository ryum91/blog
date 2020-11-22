import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';

import {
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';
import './style.scss';

library.add(
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs
);

interface Props {
  name: 'apple' | 'aws' | 'php' | 'node' | 'vuejs' | 'react' | 'js' | 'html5';
  title: string;
}

export const Icon = ({ name, title }: Props) => (
  <div className="icon" title={title}>
    <FontAwesomeIcon icon={['fab', name as IconName]} />
  </div>
);
