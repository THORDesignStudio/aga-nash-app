import * as React from "react";
import { SvgXml } from "react-native-svg";

export default function InfoIcon(props) {
  const Info = `<svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="SECTION-1" transform="translate(-282.000000, -173.000000)">
            <g id="Group-2" transform="translate(283.000000, 173.000000)">
                <circle id="Oval-Copy-7" stroke="#979797" fill="#FFFFFF" cx="9.5" cy="10" r="9.5"></circle>
                <text id="i" font-family="Georgia" font-size="16" font-weight="normal" fill="#000000">
                    <tspan x="7.15625" y="15">i</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>
`;

  const InfoSVG = () => <SvgXml xml={Info} />;
  return <InfoSVG />;
}
