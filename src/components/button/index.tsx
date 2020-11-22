import React from 'react';
import { Link } from 'gatsby';

interface Props {
  path: string;
  label: string;
  primary: boolean;
}

export const Button = ({ path, label, primary }: Props) => {
  return (
    <Link className="readmore" to={path}>
      <span
        className={`btn btn-outline-primary btn-block ${
          primary ? 'btn-outline-primary' : 'btn-outline-secondary'
        }`}
      >
        {label}
      </span>
    </Link>
  );
};
