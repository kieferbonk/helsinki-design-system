import React from 'react';

import { IconProps } from './Icon.interface';
import styles from './Icon.module.css';

export const IconInstagram = ({
  ariaLabel = 'instagram',
  ariaLabelledby,
  ariaHidden = true,
  className = '',
  color,
  size = 's',
  style = {},
}: React.SVGProps<SVGSVGElement> & IconProps) => (
  <svg
    className={[styles.icon, styles[size], className].filter((e) => e).join(' ')}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
    aria-hidden={ariaHidden}
    color={color}
    style={style}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.0714 3C20.0855 3 20.9173 3.78353 20.9942 4.7779L21 4.92857V19.0714C21 20.0855 20.2165 20.9173 19.2221 20.9942L19.0714 21H4.92857C3.91454 21 3.08273 20.2165 3.0058 19.2221L3 19.0714V4.92857C3 3.91454 3.78353 3.08273 4.7779 3.0058L4.92857 3H19.0714ZM9.11255 5.04919C7.99442 5.10229 7.00123 5.35839 6.17981 6.17669C5.35839 6.99498 5.10541 7.98818 5.04919 9.10943L5.03066 9.54569C4.98433 10.9687 4.99051 13.8504 5.04919 14.8843C5.10229 16.0056 5.35839 16.9988 6.17981 17.8171C7.00123 18.6354 7.9913 18.8915 9.11255 18.9477L9.54882 18.9662C10.9718 19.0125 13.8535 19.0064 14.8875 18.9477C16.0087 18.8946 17.0019 18.6385 17.8202 17.8171C18.6385 16.9988 18.8946 16.0056 18.9508 14.8843L18.9693 14.4482C19.0157 13.0257 19.0095 10.1465 18.9508 9.11255C18.8977 7.9913 18.6416 6.9981 17.8202 6.17981C17.0019 5.36152 16.0087 5.10541 14.8875 5.04919L14.4512 5.03066C13.0282 4.98433 10.1465 4.99051 9.11255 5.04919ZM12.0016 6.26101L13.0197 6.25364C14.097 6.24924 15.454 6.27642 16.1274 6.54211C16.7395 6.78572 17.2112 7.25733 17.4579 7.87262C17.8233 8.79398 17.739 10.9803 17.739 11.9984L17.7474 13.3166C17.7452 14.335 17.7015 15.5121 17.4579 16.1243C17.2143 16.7364 16.7427 17.208 16.1274 17.4548C15.206 17.8202 13.0197 17.7359 12.0016 17.7359L10.9835 17.7432C9.90609 17.7476 8.54911 17.7205 7.87574 17.4548C7.26358 17.2112 6.79197 16.7395 6.54523 16.1243C6.17981 15.2029 6.26414 13.0166 6.26414 11.9984L6.25676 10.9803C6.25237 9.90297 6.27955 8.54599 6.54523 7.87262C6.78885 7.26046 7.26046 6.78885 7.87574 6.54211C8.7971 6.17669 10.9834 6.26101 12.0016 6.26101ZM12.0016 8.40982C10.0152 8.40982 8.41294 10.012 8.41294 11.9984C8.41294 13.9848 10.0152 15.5871 12.0016 15.5871C13.988 15.5871 15.5902 13.9848 15.5902 11.9984C15.5902 10.012 13.988 8.40982 12.0016 8.40982ZM12.0016 9.66537C13.2883 9.66537 14.3346 10.7117 14.3346 11.9984C14.3346 13.2852 13.2852 14.3315 12.0016 14.3315C10.7179 14.3315 9.66849 13.2852 9.66849 11.9984C9.66849 10.7117 10.7148 9.66537 12.0016 9.66537ZM15.737 7.42599C15.2747 7.42599 14.8999 7.80078 14.8999 8.26302C14.8999 8.72526 15.2716 9.10006 15.737 9.10006C16.1992 9.10006 16.574 8.72839 16.574 8.26302C16.574 7.80078 16.1992 7.42599 15.737 7.42599Z"
      fill="currentColor"
    />
  </svg>
);
