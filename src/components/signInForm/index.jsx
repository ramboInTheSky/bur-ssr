import { Form } from "formik";
import PropTypes from "prop-types";
import React from 'react';
import CustomInput from "../formikComponents/customInput";
import style from "./styles.scss";


export default function SignInForm(props) {
  const { isSubmitting } = props;
  return (
    <Form>
      <CustomInput
        label="Email"
        name="email"
        type="email"
        labelClassName={style.label}
        inputClassName={style.binput}
        disabled={isSubmitting} />
      <CustomInput
        label="Password"
        name="password"
        type="password"
        labelClassName={style.label}
        inputClassName={style.binput}
        disabled={isSubmitting} />
      <button
        type="submit"
        className={style.button}
        disabled={isSubmitting}
      >
        Sign In
      </button>
    </Form>
  )
}

SignInForm.propTypes = {
  isSubmitting: PropTypes.bool.isRequired
};

