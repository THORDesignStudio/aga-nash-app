import * as React from "react";
import { SvgXml } from "react-native-svg";

export default function NextIcon(props) {
  const Next = `<svg width="147px" height="53px" viewBox="0 0 147 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="SECTION-1" transform="translate(-167.000000, -410.000000)">
          <g id="Group-6" transform="translate(167.745763, 410.000000)">
              <circle id="Oval" fill="#E49917" transform="translate(24.500000, 26.500000) scale(-1, 1) translate(-24.500000, -26.500000) " cx="24.5" cy="26.5" r="24.5"></circle>
              <polygon id="Triangle-Copy" fill="#FFFFFF" transform="translate(27.500000, 26.833333) rotate(90.000000) translate(-27.500000, -26.833333) " points="27.5 16.8333333 37.5 36.8333333 17.5 36.8333333"></polygon>
          </g>
      </g>
  </g>
</svg>
`;

  const NextSVG = () => <SvgXml xml={Next} />;
  return <NextSVG />;
}
