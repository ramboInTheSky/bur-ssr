import * as Yup from "yup";

const schemas = {
  emailSchema: Yup.string()
    .email("Invalid Email")
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  passwordSchema: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
};

export default schemas;
