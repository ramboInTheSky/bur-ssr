/* eslint-disable jsx-a11y/label-has-associated-control */
// We need to disable this eslint rule because label here is included
// within a component. If needed, we can customize the .eslintrc to be
// aware of custom components containing <label>
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md

import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

export default function CustomInput(props) {
  const { labelClassName, inputClassName, type, name, label, disabled } = props;
  return (
    <label className={labelClassName}>
      <span>{label}</span>
      <Field
        type={type}
        name={name}
        className={inputClassName}
        disabled={disabled}
      />
      <ErrorMessage name="email" component="span" />
    </label>
  );
}

CustomInput.propTypes = {
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string
};

CustomInput.defaultProps = {
  labelClassName: undefined,
  inputClassName: undefined,
  disabled: false,
  type: '',
  name: ''
}
