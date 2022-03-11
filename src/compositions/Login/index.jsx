/* eslint-disable jsx-a11y/label-has-associated-control */

import { Formik } from "formik";
import React, { Component } from "react";
import * as Yup from "yup";
import Loader from "react-loader";
import SignInForm from "../../components/signInForm";
import { FORM_LOGIN_ERROR_MESSAGE, IFRAME_HIDE_MESSAGE, IFRAME_SHOW_MESSAGE, IFRAME_UNAUTHORIZED_MESSAGE, ROUTE_PROXY, URL_CHANNEL_HOST } from "../../constants";
import formSchemas from "../../formSchemas";
import style from "./style.scss";
import api from "../../utils/api";

export class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      submissionErrorMessage: undefined
    };
  }

  componentDidMount() {
    window.parent.postMessage(IFRAME_UNAUTHORIZED_MESSAGE, URL_CHANNEL_HOST);
  }

  redirectToProxy = () => {
    const url = window.gigya.utils.URL.addParamsToURL(ROUTE_PROXY, { mode: "afterLogin" });
    window.location.href = url;
  };

  login = (username, password) => {
    return new Promise((resolve, reject)=>{
      this.setState({
        loading: true
      });
      return api
        .login(username, password)
        .then(response => {
          this.setState({
            loading: false
          });
          resolve(response);
        })
        .catch(e => {
          this.setState({
            loading: false
          });
          reject(e);
        });
    });
  };

  onSubmit = async (values, { setSubmitting }) => {

    this.setState({ submissionErrorMessage: undefined });

    window.parent.postMessage(IFRAME_HIDE_MESSAGE, URL_CHANNEL_HOST);

    try {
      await this.login(values.email, values.password);
      setSubmitting(false);
      this.redirectToProxy();
    } catch {
      setSubmitting(false);
      this.setState({ submissionErrorMessage: FORM_LOGIN_ERROR_MESSAGE });
      window.parent.postMessage(IFRAME_SHOW_MESSAGE, URL_CHANNEL_HOST);
    }
  }

  render() {
    const {loading, submissionErrorMessage} = this.state;
    const signInSchema = Yup.object().shape({email: formSchemas.emailSchema, password:formSchemas.passwordSchema})
    return (
        <Loader loaded={!loading} options={{ scale: 0.6 }}>
          <div className={style.container}>
            <div className={style.wrapper}>
              <h1>Log In</h1>
              <Formik
                className={style.form}
                initialValues={{ email: "", password: "" }}
                validationSchema={signInSchema}
                onSubmit={this.onSubmit}>
                {({ isSubmitting }) =>
                  (
                    <React.Fragment>
                      <div className="formErrorMessage">{submissionErrorMessage}</div>
                      <SignInForm isSubmitting={isSubmitting} />
                    </React.Fragment>
                  )
                }
              </Formik>
            </div>
          </div>
        </Loader>
    );
  }
}

export default LoginComponent;
