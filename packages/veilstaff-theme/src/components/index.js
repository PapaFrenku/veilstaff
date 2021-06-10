import { Global, css, connect, Head } from "frontity";
import FontFaces from "./styles/font-faces";
import Header from "./header";
import TopPreview from "./top-preview";
import Features from "./features";
import ForWhom from "./forWhom";

const Theme = ({ state }) => {
  // const data = state.source.get(state.router.link);

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
      </Head>

      <FontFaces />
      <Global styles={globalStyles} />
      <Header />
      <TopPreview />
      {/* <div style={{height: '50vh'}}>
        <h2 className="blockTitle">Название блока</h2>
      </div> */}
      <Features />
      <ForWhom />
    </>
  );
};

const globalStyles = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
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
    font-size: 2.375em;
    font-weight: 600;
    line-height: 2.5em;
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
    color: #fc6167;
    font-weight: 600;
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
`;

export default connect(Theme);
