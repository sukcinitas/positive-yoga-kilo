import { createGlobalStyle } from "styled-components";
import SFProTextRegular from "../fonts/SF-Pro-Text-Regular.ttf";
import SFProTextSemiBold from "../fonts/SF-Pro-Text-Semibold.ttf";
import SFProTextBold from "../fonts/SF-Pro-Text-Bold.ttf";
import SFProDisplayBold from "../fonts/SF-Pro-Display-Bold.ttf";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "SFProTextRegular";
        src: url(${SFProTextRegular}) format("truetype");
        font-weight: 400;
    }

    @font-face {
        font-family: "SFProTextSemibold";
        src: url(${SFProTextSemiBold}) format("truetype");
        font-weight: 600;
    }

    @font-face {
        font-family: "SFProTextBold";
        src: url(${SFProTextBold}) format("truetype");
        font-weight: 700;
    }

    @font-face {
        font-family: "SFProDisplayBold";
        src: url(${SFProDisplayBold}) format("truetype");
        font-weight: 700;
    }

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }
    
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    :root {
        --primary: #FF9B4E;
        --bright-1: #FFE082;
        --bright-2: #90CAF9;
        --bright-3: #91B83D;
        --bright-4: #FFCC80;
        --dark-1: #22222C;
        --gray-1: #39353C;
        --gray-2: #424242;
        --gray-3: #212121;
        --gray-4: rgba(0, 0, 0, 0.08);
        --gray-5: rgba(0, 0, 0, 0.04);
        --shadow-1: hsla(26, 100%, 65%, 0.24);
        --shadow-2: hsla(0, 0%, 0%, 0.16);
        --shadow-3: hsla(274, 6%, 22%, 0.08);
        --white: #FFF;
        --black: #000;
    }
}
`;

export default GlobalStyles;
