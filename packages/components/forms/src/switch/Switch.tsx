import React from 'react';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';
import { useFormControl } from '../form-control/FormControlContext';

export type SwitchProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate'>;

const _Switch = (props: SwitchProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    testId = 'cf-ui-switch',
    id,
    isDisabled,
    isInvalid,
    isRequired,
    children,
    ...otherProps
  } = props;

  const formProps = useFormControl({
    id,
    isDisabled,
    isInvalid,
    isRequired,
  });

  return (
    <BaseCheckbox
      {...formProps}
      {...otherProps}
      testId={testId}
      type="switch"
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

export const Switch = React.forwardRef(_Switch);
