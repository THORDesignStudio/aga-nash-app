import * as React from "react";
import { SvgXml } from "react-native-svg";

export default function SourcesIcon(props) {
  const SourcesIconSVG = `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="53px" height="67px" viewBox="0 0 53 67" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <filter color-interpolation-filters="auto" id="filter-1">
              <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 0.999066 0 0 0 0 0.999066 0 0 0 1.000000 0"></feColorMatrix>
          </filter>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="HOME" transform="translate(-134.000000, -547.000000)">
              <g id="SOURCES" transform="translate(134.000000, 547.000000)">
                  <rect id="Rectangle-5-Copy-25" fill="#E49917" fill-rule="nonzero" x="0" y="0" width="53" height="53" rx="15"></rect>
                  <g filter="url(#filter-1)" id="Group-13" stroke-linejoin="round">
                      <g transform="translate(14.000000, 11.000000)">
                          <path d="M6,0 L6,5.6 C6,6.3728 5.4624,7 4.8,7 L0,7" id="Stroke-1" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                          <path d="M24,30.08 C24,31.14048 23.1517895,32 22.1052632,32 L1.89473684,32 C0.848210526,32 0,31.14048 0,30.08 L0,6.4 L6.31578947,0 L22.1052632,0 C23.1517895,0 24,0.85952 24,1.92 L24,30.08 Z" id="Stroke-3" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                          <path d="M21,17 C21,21.4184615 17.1946154,25 12.5,25 C7.80538462,25 4,21.4184615 4,17 C4,12.5815385 7.80538462,9 12.5,9 C17.1946154,9 21,12.5815385 21,17 Z" id="Stroke-5" stroke="white" stroke-width="2"></path>
                          <path d="M15,17 C15,21.41856 13.6572,25 12,25 C10.3428,25 9,21.41856 9,17 C9,12.58144 10.3428,9 12,9 C13.6572,9 15,12.58144 15,17 Z" id="Stroke-7" stroke="white" stroke-width="2"></path>
                          <line x1="20" y1="14.5" x2="5" y2="14.5" id="Stroke-9" stroke="white" stroke-width="2"></line>
                          <line x1="5" y1="20.5" x2="20" y2="20.5" id="Stroke-11" stroke="white" stroke-width="2"></line>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
`;

  const SourcesSVG = () => <SvgXml xml={SourcesIconSVG} />;
  return <SourcesSVG />;
}
