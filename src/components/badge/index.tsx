import React from 'react';

interface Props {
  label: string;
  primary: boolean;
}

export const Badge = ({ label, primary }: Props) => {
  return <span className={`badge ${primary ? 'badge-primary' : 'badge-secondary'}`}>{label}</span>;
};
