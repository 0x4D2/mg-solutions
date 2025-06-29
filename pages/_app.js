import React, { Suspense, useEffect } from "react";
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
        const mainContainer = document.querySelector('.main-container');
        if (mainContainer) mainContainer.scrollTop = 0;
      };

      resetScroll();
      setTimeout(resetScroll, 100);
      setTimeout(resetScroll, 500);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
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
  console.log(`Loading: ${url}`);
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

// Lazy-loaded components
const LazyParticles = React.lazy(() => import("../particles-config.js"));

export default class MyApp extends App {
  componentDidMount() {
    this.addCopyrightComment();

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);
  }

  componentWillUnmount() {
    Router.events.off("routeChangeStart", handleRouteChangeStart);
    Router.events.off("routeChangeComplete", handleRouteChangeComplete);
    Router.events.off("routeChangeError", handleRouteChangeError);
  }

  addCopyrightComment() {
    const comment = document.createComment(`
=========================================================
* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim
=========================================================
`);
    document.insertBefore(comment, document.documentElement);
  }

  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => (
      <>
        <Navbar />
        <div className="main-container">
          {Component.background && (
            <div className="fixed top-0 left-0 w-full h-full z-0">
              <Suspense fallback={
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <LazyParticles />
              </Suspense>
              <Component.background />
            </div>
          )}
          <main className="relative z-10 pt-20">
            {children}
          </main>
        </div>
      </>
    ));

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>MG Solutions - Ihre Sicherheitslösung</title>
          <meta name="description" content="MG Solutions bietet maßgeschneiderte Cybersecurity-Lösungen für Unternehmen und Privatpersonen." />
          <meta name="keywords" content="Cybersecurity, Sicherheitslösungen, Unternehmen, Privatpersonen, MG Solutions" />
          <meta property="og:title" content="MG Solutions - Ihre Sicherheitslösung" />
          <meta property="og:description" content="MG Solutions bietet maßgeschneiderte Cybersecurity-Lösungen für Unternehmen und Privatpersonen." />
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
