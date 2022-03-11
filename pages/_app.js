import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { URL_CDC_SDK } from '../src/constants';

class AppComposition extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <script
            type="text/javascript"
            key="gigya"
            lang="javascript"
            src={URL_CDC_SDK}
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default AppComposition;
