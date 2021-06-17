import React from "react";
import { SvgXml } from "react-native-svg";

export default function HepRefer(props) {
  const HepReferSVG = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="92px" height="91px" viewBox="0 0 92 91" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Group 15</title>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="LD-HEP" transform="translate(-116.000000, -122.000000)">
              <g id="Group-15" transform="translate(116.589655, 122.000000)">
                  <path d="M91.4103448,82.5740741 C91.4103448,87.2083333 87.6186782,91 82.9844189,91 L8.83627075,91 C4.20201149,91 0.410344828,87.2083333 0.410344828,82.5740741 L0.410344828,8.42592593 C0.410344828,3.79166667 4.20201149,0 8.83627075,0 L82.9844189,0 C87.6186782,0 91.4103448,3.79166667 91.4103448,8.42592593 L91.4103448,82.5740741 Z" id="Fill-1" fill="#112034"></path>
                  <path d="M35.4103448,51 L35.4103448,55.2852228 C35.4103448,63.9657664 42.349757,71 50.9111932,71 C59.4709326,71 66.4103448,63.9657664 66.4103448,55.2852228 L66.4103448,51" id="Stroke-3" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M59.4103448,43.9991816 C59.4103448,47.8654273 62.5461877,51 66.4119815,51 C70.2777753,51 73.4103448,47.8654273 73.4103448,43.9991816 C73.4103448,40.1345727 70.2777753,37 66.4119815,37 C62.5461877,37 59.4103448,40.1345727 59.4103448,43.9991816 Z" id="Stroke-5" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M36.4103448,51 C27.5733576,51 20.4103448,43.9409329 20.4103448,35.230472 L20.4103448,26.3078112 C20.4103448,22.8236268 23.2772864,20 26.8110394,20 L28.6829734,20" id="Stroke-7" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round"></path>
                  <line x1="28.4103448" y1="18" x2="28.4103448" y2="23" id="Stroke-9" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round"></line>
                  <path d="M35.4103448,51 C44.247332,51 51.4103448,43.9409329 51.4103448,35.230472 L51.4103448,26.3078112 C51.4103448,22.8236268 48.5434032,20 45.0096502,20 L43.1377162,20" id="Stroke-11" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round"></path>
                  <line x1="43.4103448" y1="18" x2="43.4103448" y2="23" id="Stroke-13" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round"></line>
              </g>
          </g>
      </g>
  </svg>
  `;

  const HepReferIcon = () => <SvgXml xml={HepReferSVG} />;

  return <HepReferIcon />;
}
