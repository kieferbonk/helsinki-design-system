import React from 'react';

// import core base styles
import 'hds-core';
import styles from './Checkbox.module.css';
import classNames from '../../utils/classNames';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * If `true`, the component is checked
   */
  checked?: boolean;
  /**
   * Additional class names to apply to the checkbox
   */
  className?: string;
  /**
   * If `true`, the checkbox will be disabled
   */
  disabled?: boolean;
  /**
   * The id of the input element
   */
  id: string;
  /**
   * The label for the checkbox
   */
  label?: string | React.ReactNode;
  /**
   * **[DEPRECATED]** This prop will be removed in a future version. Use the `label` prop instead
   */
  labelText?: string;
  /**
   * Callback fired when the state is changed
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Override or extend the styles applied to the component. See checkbox [tokens](https://city-of-helsinki.github.io/helsinki-design-system/components/checkbox#tokens) for available CSS variables
   */
  style?: React.CSSProperties;
  /**
   * The value of the component
   */
  value?: string;
};

export const Checkbox = React.forwardRef(
  (
    {
      checked = false,
      className,
      disabled = false,
      id,
      label,
      labelText,
      onChange = () => null,
      style,
      value,
      ...rest
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <div className={classNames(styles.checkbox, className)} style={style}>
      <input
        ref={ref}
        id={id}
        className={classNames(styles.input)}
        onChange={onChange}
        value={value}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        aria-checked={checked}
        {...rest}
      />
      <label htmlFor={id} className={classNames(styles.label)}>
        {label || labelText}
      </label>
    </div>
  ),
);
