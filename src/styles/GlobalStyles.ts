import { StyleConstants } from './StyleConstants';
import fontIconEOT from 'assets/fonts/font-icon.eot';
import fontIconTTF from 'assets/fonts/font-icon.ttf';
import fontIconWOFF from 'assets/fonts/font-icon.woff';

import { media } from './Media'

export const GlobalStyle = createGlobalStyle`
  @charset "UTF-8";

  @font-face {
    font-family: 'font-icons';
    font-weight: normal;
    font-style: normal;
    src: url(${fontIconEOT});
    src:
      url(${fontIconEOT}) format('embedded-opentype'),
      url(${fontIconTTF}) format('truetype'),
      url(${fontIconWOFF}) format('woff');
    font-display: swap;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background: ${({ theme }) => theme.background.ebb};


    ${media.lg} {
      background: ${({ theme }) => theme.background.silver};
    }
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;