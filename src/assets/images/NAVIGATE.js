import * as React from "react";
import { SvgXml } from "react-native-svg";

export default function NavigateIcon(props) {
  const NavigateIconSVG = `
  <svg width="53px" height="67px" viewBox="0 0 53 67" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <filter color-interpolation-filters="auto" id="filter-1">
              <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix>
          </filter>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="HOME" transform="translate(-45.000000, -547.000000)">
              <g id="NAVIGATE" transform="translate(45.000000, 547.000000)">
                  <rect id="Rectangle-5-Copy-11" fill="#E49917" fill-rule="nonzero" x="0" y="0" width="53" height="53" rx="15"></rect>
                  <g filter="url(#filter-1)" id="Group-23" stroke-linejoin="round">
                      <g transform="translate(10.000000, 10.000000)">
                          <path d="M33,16.5 C33,25.6125 25.6125,33 16.5,33 C7.3875,33 0,25.6125 0,16.5 C0,7.3875 7.3875,0 16.5,0 C25.6125,0 33,7.3875 33,16.5 Z" id="Stroke-1" stroke="white" stroke-width="2"></path>
                          <polygon id="Stroke-3" stroke="white" stroke-width="2" points="19.1766908 19.1766908 7 25 12.8240579 12.8240579 25 7"></polygon>
                          <line x1="16.5" y1="6" x2="16.5" y2="4" id="Stroke-5" stroke="white" stroke-width="2" stroke-linecap="round"></line>
                          <line x1="9" y1="9" x2="7" y2="7" id="Stroke-7" stroke="white" stroke-width="2" stroke-linecap="round"></line>
                          <line x1="9" y1="9" x2="7" y2="7" id="Stroke-9" stroke="white" stroke-width="2" stroke-linecap="round"></line>
                          <line x1="27" y1="16.5" x2="29" y2="16.5" id="Stroke-11" stroke="white" stroke-width="2" stroke-linecap="round"></line>
                          <line x1="16.5" y1="29" x2="16.5" y2="27" id="Stroke-13" stroke="white" stroke-width="2" stroke-linecap="round"></line>
                          <line x1="26" y1="26" x2="24" y2="24" id="Stroke-15" stroke="white" stroke-width="2" stroke-linecap="round"></line>
                          <line x1="26" y1="26" x2="24" y2="24" id="Stroke-17" stroke="white" stroke-width="2" stroke-linecap="round"></line>
                          <line x1="4" y1="16.5" x2="6" y2="16.5" id="Stroke-19" stroke="white" stroke-width="2" stroke-linecap="round"></line>
                          <line x1="13" y1="13" x2="19" y2="19" id="Stroke-21" stroke="white" stroke-width="2"></line>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
`;

  const NavigateSVG = () => <SvgXml xml={NavigateIconSVG} />;
  return <NavigateSVG />;
}
