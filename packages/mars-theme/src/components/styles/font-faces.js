import { connect,css, Global } from "frontity";
import React from "react";

import MyriadProBold from "../../fonts/MyriadPro/MyriadPro-Bold.woff";
import MyriadProSemiBold from "../../fonts/MyriadPro/MyriadPro-Semibold.woff";
import MyriadProRegular from "../../fonts/MyriadPro/MyriadPro-Regular.woff";
import MyriadProLight from "../../fonts/MyriadPro/MyriadPro-Light.woff";

const fonts = {
  all: [MyriadProBold, MyriadProRegular, MyriadProSemiBold, MyriadProLight],
};

const FontFace = ({ state }) => {
  const font = fonts[state.theme.fontSets] || fonts["all"];

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "MyriadPro";
          font-weight: 700;
	        font-style: normal;
          src: url(${font[0]}) format("woff");
        }
        @font-face {
          font-family: "MyriadPro";
          font-weight: 600;
	        font-style: normal;
          src: url(${font[2]}) format("woff");
        }
        @font-face {
          font-family: "MyriadPro";
          font-weight: 400;
	        font-style: normal;
          src: url(${font[1]}) format("woff");
        }
        
        @font-face {
          font-family: "MyriadPro";
          font-weight:300;
	        font-style: normal;
          src: url(${font[3]}) format("woff");
        }
      `}
    />
  );
};

export default connect(FontFace);
