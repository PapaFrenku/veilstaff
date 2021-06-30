import { useState, useEffect } from "react";
import { Global, css, connect, Head, styled } from "frontity";
import FontFaces from "./styles/font-faces";
import { StickyProvider } from "react-stickup";
import Header from "./header";
import TopPreview from "./top-preview";
import Features from "./features";
import ForWhom from "./forWhom";
import ProgrammFeatures from "./programmFeatures";
import config from "../config";
import Modules from "./modules";
import AssessmentStages from "./assessmentStages";
import AppScreenList from "./appScreenList";
import Advantages from "./advantages";
import Results from "./results";
import Calculator from "./calculator";
import ContactForm from "./contactForm";
import Footer from "./footer";
import window from "global";
import MobileMenu from "./mobileMenu";
import FavIcon from "../assets/images/favicon.png";
import parser from "html-react-parser";

const Theme = ({ state }) => {
  useEffect(() => {
    window?.ym(62196937, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });
  }, [window])
  return (
    <>
      <Head>
        <meta name="description" content={state.description} />
        <title>{state.title}</title>
        <meta name="yandex-verification" content="2565820f9675e0a5" />
        <link rel="shortcut icon" href={FavIcon}></link>
        <html lang="ru" />
      </Head>
      <FontFaces />
      <Global styles={globalStyles} />

      <HeaderContainer>
        <StickyProvider>
          <Header />
        </StickyProvider>
      </HeaderContainer>
      <StickyProvider>
        <MobileMenuContainer>
          <MobileMenu />
        </MobileMenuContainer>
      </StickyProvider>

      <TopPreview />
      <ProgrammFeatures />
      <Modules />
      <AppScreenList />
      <Results />
      <Calculator />
      <ContactForm />
      <Footer />

      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <script>
        {(function (w, d, u) {
          if (d && Object.keys(d).length) {
            var s = d.createElement("script");
            s.async = true;
            s.src = u + "?" + ((Date.now() / 60000) | 0);
            var h = d.getElementsByTagName("script")[0];
            h.parentNode.insertBefore(s, h);
          }
        })(
          window,
          window.document,
          "https://vkmbitrix.ru/upload/crm/site_button/loader_3_61voe2.js"
        )}
      </script>
      <script type="text/javascript">
        {
          ((function (m, e, t, r, i, k, a) {
            if (e && Object.keys(e).length) {
              m[i] =
                m[i] ||
                function () {
                  (m[i].a = m[i].a || []).push(arguments);
                };
              m[i].l = 1 * new Date();
              (k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a);
            }
          })(
            window,
            window.document,
            "script",
            "https://mc.yandex.ru/metrika/tag.js",
            "ym"
          ))
        }
      </script>
    </>
  );
};

const HeaderContainer = styled.div`
  @media (max-width: 1070px) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  @media (min-width: 1071px) {
    display: none;
  }
`;

const globalStyles = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-size: 16px;
  }
  * body {
    margin: 0;
    font-family: MyriadPro;
    background: #f3f3f3;
    font-size: 16px;
    line-height: 16px;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2.125em;
    margin: 0.67em 0;
  }
  .blockTitle {
    font-size: 1.75em;
    font-weight: 600;
    line-height: 1em;
    margin: 0;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    &::after {
      content: "";
      display: block;
      /* position: absolute; */
      width: 54%;
      height: 4px;
      margin-top: 18px;
      background-color: ${config.collors.secondary};
    }
  }
  .modalTitle {
    font-size: 1.75em;
    font-weight: 600;
    line-height: 1em;
    margin: 0;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    width: 100%;
    height: auto;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  .sticky {
    position: sticky;
    top: 0;
    z-index: 100; /* this is optional and should be different for every project */
  }
  .sticky-wrapper {
    position: relative;
    height: 3rem; /* We need to change this value */
  }
  .sticky .sticky-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .activeCategoryLink {
    color: ${config.collors.primary};
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      display: block;
      position: absolute;
      background: ${config.collors.primary};
    }
  }

  .container {
    max-width: 1250px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
  }

  .tabsContainer {
    display: flex;
  }

  .tabsList {
    max-width: 410px;
    width: 100%;
    list-style: none;
    padding: 0;
  }

  .tabItem {
    color: ${config.collors.primary};
    line-height: 35px;
    font-weight: 300;
    font-size: 18px;
    padding-right: 20px;
    &::after {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      max-height: 10px;
      max-width: 10px;
      border-style: solid;
      border-width: 5px 10px 5px 0;
      border-color: transparent;
      top: calc(50% - 5px);
      transform: translateX(20px);
      transition: 0.2s;
    }

    @media (max-width: 690px) {
      font-size: 14px;
      line-height: 1.8em;
      padding-right: 10px;
      ::after {
        display: none;
      }
    }
  }

  .selectedTab {
    color: ${config.collors.secondary};
    position: relative;
    &::after {
      border-color: transparent ${config.collors.secondary} transparent
        transparent;
    }
  }

  .headerWithShadow {
    & nav {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 20%);
      transform: translateY(-20px);
      background: #fff;
      height: 65px;
      opacity: 0.7;
      transition: 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  .mobileHeaderWithShadow {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 20%);
    background: #fff;
    opacity: 0.7;
    transition: 0.2s;
    /* transform: translateY(10px); */
    &:hover {
      opacity: 1;
    }
  }
  .ReactModal__Overlay {
    z-index: 1000000;
  }
  .primaryButton {
    background: ${config.collors.primary};
    color: #fff;
    height: 60px;
    border: none;
    display: inline-flex;
    align-items: center;
    padding-left: 35px;
    padding-right: 35px;
    width: fit-content;
    outline: none;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.35s ease-out;
    font-weight: 600;
    justify-content: center;
    &:hover {
      opacity: 0.8;
    }

    & span {
      white-space: nowrap;
    }

    & span::after {
      content: "";
      height: 2px;
      display: block;
      transition: 0.2s;
      border-top: 2px dotted #fff;
    }
  }
  .transparentButton {
    background: transparent;
    color: ${config.collors.primary};
    height: 60px;
    border: 2px solid ${config.collors.primary};
    display: inline-flex;
    align-items: center;
    padding-left: 35px;
    padding-right: 35px;
    width: fit-content;
    outline: none;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.35s ease-out;
    font-weight: 600;
    justify-content: center;
    &:hover {
      opacity: 0.8;
    }

    & span {
      white-space: nowrap;
    }

    & span::after {
      content: "";
      height: 2px;
      display: block;
      transition: 0.2s;
      border-top: 2px dotted ${config.collors.primary};
    }
  }
  .b24-form-sign {
    opacity: 0;
    display: none;
  }
  .tabItem {
    cursor: pointer;
  }
  .tabItem:hover {
    color: ${config.collors.secondary};
    transition: 0.2s;
  }
  .b24-form-control {
    border-radius: 12px !important;
  }

  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    left: 30px;
    top: 15px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #f3f3f3;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    padding: 0.8em;

    & a {
      font-size: 22px;
      margin-bottom: 1em;
    }
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(255, 255, 255, 0.75) !important;
    top: 0;
  }

  ol {
    list-style: none;

    & li {
      position: relative;

      &::before {
        content: "– ";
        font-size: inherit;
        color: inherit;
        position: inline-block;
      }
    }
  }

  .ReactModal__Content {
    width: 65% !important;
    padding: 0 !important;
  }

  @media (max-width: 1100px) {
    .ReactModal__Content {
      width: 100% !important;
    }
  }
`;

export default connect(Theme);
