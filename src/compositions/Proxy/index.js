import Head from "next/head";
import React, { Component } from "react";
import Loader from "react-loader";
import { URL_CDC_OIDC_SDK } from "../../constants";

export default class ProxyComposition extends Component {
  createGigyaConfigObject = () => ({
    // Requires loginUrl, consentURL and errorURL
    __html:
      `{ loginURL: "login",
      consentURL: "consent",
      errorURL: "error"}`
  });

  render() {
    return (
      <div>
        <Head>
          <script
            type="text/javascript"
            lang="javascript"
            src={URL_CDC_OIDC_SDK}
            // CDC's SDK requires to drop a script tag on the client and pass the params of the redirect urls as
            // content (in between the script tags), so we need to use "dangerouslySetInnerHTML".
            // The rendered code resulting from this insertion should be:
            // <script src="url-of-the-script"> {loginURL: "login", consentURL: "consent", errorURL: "error"}`</script>

            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={this.createGigyaConfigObject()} />
        </Head>
        <Loader loaded={false} options={{ scale: 0.6 }} />
      </div>
    );
  }
}
