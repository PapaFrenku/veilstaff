import { useState, useEffect } from "react";
import { Global, css, connect, Head } from "frontity";
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
import { window, document } from "global";

// export const useDocument = () => {
//   const [myDocument, setMyDocument] = useState(null);

//   useEffect(() => {
//     setMyDocument(document);
//   }, []);

//   return myDocument;
// };

const Theme = ({ state }) => {
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="ru" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script>
          {(function (w, d, u) {
            if (d) {
              var s = d.createElement("script");
              s.async = true;
              s.src = u + "?" + ((Date.now() / 60000) | 0);
              var h = d.getElementsByTagName("script")[0];
              h.parentNode.insertBefore(s, h);
            }
          })(
            window,
            document,
            "https://vkmbitrix.ru/upload/crm/site_button/loader_3_61voe2.js"
          )}
        </script>
      </Head>

      <FontFaces />
      <Global styles={globalStyles} />
      <StickyProvider>
        <Header />
      </StickyProvider>
      <TopPreview />
      <ProgrammFeatures />
      <Modules />
      <AppScreenList />
      <Results />
      <Calculator />
      <ContactForm />
      <Footer />
    </>
  );
};

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
  }

  .selectedTab {
    color: ${config.collors.secondary};
    position: relative;
    padding-right: 20px;
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

    &:hover {
      opacity: 0.8;
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

    &:hover {
      opacity: 0.8;
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
    transition: .2s;
  }
  .b24-form-control {
    border-radius: 12px !important;
  }
`;

export default connect(Theme);
