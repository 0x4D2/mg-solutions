import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";
import Navbar from "components/Navbars/IndexNavbar.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "styles/globals.css";
import "styles/cyber-background.css";

// Custom ScrollToTop component
const ScrollToTop = () => {
  useEffect(() => {
    const handleRouteChange = () => {
      const resetScroll = () => {
        window.scrollTo({ top: 0, behavior: "auto" });
        const mainContainer = document.querySelector(".main-container");
        if (mainContainer) mainContainer.scrollTop = 0;
      };

      resetScroll();
      setTimeout(resetScroll, 100);
      setTimeout(resetScroll, 500);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return null;
};

// Page transition helpers
let pageChangeRoot = null;

const showPageChange = (url) => {
  const container = document.getElementById("page-transition");
  if (!container) return;

  if (!pageChangeRoot) {
    pageChangeRoot = ReactDOM.createRoot(container);
  }
  pageChangeRoot.render(<PageChange path={url} />);
};

const hidePageChange = () => {
  const container = document.getElementById("page-transition");
  if (container && pageChangeRoot) {
    pageChangeRoot.unmount();
    pageChangeRoot = null;
  }
};

const handleRouteChangeStart = (url) => {
  document.body.classList.add("body-page-transition");
  showPageChange(url);
};

const handleRouteChangeComplete = () => {
  hidePageChange();
  document.body.classList.remove("body-page-transition");
};

const handleRouteChangeError = () => {
  hidePageChange();
  document.body.classList.remove("body-page-transition");
};

export default class MyApp extends App {
  componentDidMount() {
    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);
  }

  componentWillUnmount() {
    Router.events.off("routeChangeStart", handleRouteChangeStart);
    Router.events.off("routeChangeComplete", handleRouteChangeComplete);
    Router.events.off("routeChangeError", handleRouteChangeError);
  }

  render() {
    const { Component, pageProps } = this.props;

    const Layout =
      Component.layout ||
      (({ children }) => (
        <>
          <Navbar />
          <div className="main-container">
            <main className="relative z-10 pt-20">{children}</main>
          </div>
        </>
      ));

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>MG Solutions - Ihre Sicherheitslösung</title>
          <meta
            name="description"
            content="MG Solutions bietet maßgeschneiderte Cybersecurity-Lösungen für Unternehmen und Privatpersonen."
          />
          <meta
            name="keywords"
            content="Cybersecurity, Sicherheitslösungen, Unternehmen, Privatpersonen, MG Solutions"
          />
          <meta
            property="og:title"
            content="MG Solutions - Ihre Sicherheitslösung"
          />
          <meta
            property="og:description"
            content="MG Solutions bietet maßgeschneiderte Cybersecurity-Lösungen für Unternehmen und Privatpersonen."
          />
          <meta property="og:image" content="/img/social-preview.png" />
          <meta property="og:url" content="https://www.ichwillsicherheit.de" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <ScrollToTop />
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
