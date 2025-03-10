import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconSenior = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    {...rest}
    role="img"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
      <path d="m5.5 14.5c-.27614 0-.5.2239-.5.5v9h-2v-9c0-1.3807 1.11929-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1h-2v-1c0-.2761-.22386-.5-.5-.5z" />
      <path d="m12 4c.5523 0 1-.44772 1-1s-.4477-1-1-1-1 .44772-1 1 .4477 1 1 1zm0 2c1.6569 0 3-1.34315 3-3s-1.3431-3-3-3-3 1.34315-3 3 1.3431 3 3 3z" />
      <path d="m15 9c.5523 0 1 .44772 1 1h2c0-1.65685-1.3431-3-3-3h-6c-1.65685 0-3 1.34315-3 3h2c0-.55228.44772-1 1-1z" />
      <path d="m16 16v-6h2v6z" />
      <path d="m6 11v-1h2v1z" />
      <path d="m14 22v-6h2v8h-8v-6h2v4z" />
    </g>
  </svg>
);
