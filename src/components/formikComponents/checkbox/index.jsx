import PropTypes from "prop-types";
import React from "react";

const InputFeedback = ({ error }) =>
  error ? <span className="formValidationError">{error}</span> : null;

const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  disabled,
  className,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id}>
        <input
          name={name}
          id={id}
          type="checkbox"
          value={value}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className="formValidationError"
          {...props}
        />
        <span>{label}</span>
      </label>
      {touched[name] && <InputFeedback error={errors[name]} />}
    </div>
  );
};

Checkbox.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.shape({
      name: PropTypes.string
    }),
    touched: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string
};

Checkbox.defaultProps = {
  className: ""
};

InputFeedback.propTypes = {
  error: PropTypes.string
};

InputFeedback.defaultProps = {
  error: ""
};

export default Checkbox;
