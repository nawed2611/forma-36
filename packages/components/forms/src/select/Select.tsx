import React, { useCallback, useState, ChangeEvent } from 'react';
import { BaseInput } from '@contentful/f36-inputs';
import { Box, Flex } from '@contentful/f36-core';
import { Label } from '@contentful/f36-forms';
import { ValidationMessage } from '@contentful/f36-validation-message';
import { HelpText } from '@contentful/f36-helptext';
import { CopyButton } from '@contentful/f36-copybutton';
import getStyles from './TextInput.styles';
import { SelectProps } from './types';
import { styles } from './Select.styles';

export const _Select = (
  {
    className,
    testId = 'cf-ui-text-field',
    countCharacters = false,
    isStandalone = false,
    isRequired = false,
    helpText,
    label,
    id,
    link,
    validationMessage,
    value,
    onChange,
    placeholder,
    maxLength,
    isInvalid,
    isDisabled,
    isReadOnly,
    withCopyButton,
    onCopy,
    name,
    icon,
    children,
    ...otherProps
  }: SelectProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const [valueState, setValueState] = useState<string | undefined>(value);
  // const styles = getStyles({ isInvalid, isDisabled });

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValueState(e.target.value);
      if (onChange) onChange(e);
    },
    [onChange],
  );

  return (
    <Flex flexDirection="column" fullWidth>
      {!isStandalone && (
        <Flex justifyContent="space-between" alignItems="center" fullWidth>
          <Label htmlFor={id} required={isRequired}>
            {label}
          </Label>
          {link && link}
        </Flex>
      )}

      <BaseInput
        testId={testId}
        {...otherProps}
        ref={ref}
        label={label}
        type="text"
        onChange={handleOnChange}
        placeholder={placeholder}
        as="select"
        name={name}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        icon={icon}
        maxLength={maxLength}
      >
        {children}
      </BaseInput>

      {!isStandalone && (
        <>
          {(helpText || countCharacters || validationMessage) && (
            <Flex justifyContent="space-between">
              <Flex flexDirection="column">
                {helpText && (
                  <Box marginTop="spacingXs">
                    <HelpText>{helpText}</HelpText>
                  </Box>
                )}
                {validationMessage && (
                  <Box marginTop="spacingXs">
                    <ValidationMessage>{validationMessage}</ValidationMessage>
                  </Box>
                )}
              </Flex>

              {countCharacters && maxLength && (
                <Box marginTop="spacingXs" marginLeft="spacingM">
                  <HelpText>
                    {valueState ? valueState.length : 0}/{maxLength}
                  </HelpText>
                </Box>
              )}
            </Flex>
          )}
        </>
      )}
    </Flex>
  );
};

export const Select = React.forwardRef(_Select);
