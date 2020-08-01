import React from 'react';
import PropTypes from 'prop-types';

import { Input, FormFieldWrapper, Label } from './style';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const as = isTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper className="FormField">
      <Label htmlFor={fieldId}>
        <Input
          as={as}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
