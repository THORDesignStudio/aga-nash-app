import * as React from 'react';
import  {SvgXml} from 'react-native-svg';



export default function SectionsIcon(props) {
    
    const Sections = `<svg width="54px" height="78px" viewBox="0 0 54 78" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="App-Home" transform="translate(-43.000000, -547.000000)">
        <g id="Group-2" transform="translate(43.254237, 547.000000)">
            <rect id="Rectangle-5-Copy-11" fill="#E49917" fill-rule="nonzero" x="0" y="0" width="53" height="53" rx="15"></rect>
            <text id="1" font-family="Helvetica" font-size="12" font-weight="normal" letter-spacing="0.0785717143" fill="#FFFFFF">
                <tspan x="14.8695628" y="21">1</tspan>
            </text>
            <text id="3" font-family="Helvetica" font-size="12" font-weight="normal" letter-spacing="0.0785717143" fill="#FFFFFF">
                <tspan x="14.8695628" y="39">3</tspan>
            </text>
            <text id="2" font-family="Helvetica" font-size="12" font-weight="normal" letter-spacing="0.0785717143" fill="#FFFFFF">
                <tspan x="31.8695628" y="21">2</tspan>
            </text>
            <text id="4" font-family="Helvetica" font-size="12" font-weight="normal" letter-spacing="0.0785717143" fill="#FFFFFF">
                <tspan x="31.8695628" y="39">4</tspan>
            </text>
            <line x1="10.2457627" y1="26.5" x2="43.2457627" y2="26.5" id="Line" stroke="#FFFFFF" stroke-linecap="square"></line>
            <line x1="10.2457627" y1="26.5" x2="43.2457627" y2="26.5" id="Line-Copy" stroke="#FFFFFF" stroke-linecap="square" transform="translate(26.745763, 26.500000) rotate(90.000000) translate(-26.745763, -26.500000) "></line>
        </g>
    </g>
</g>
</svg>`

const SectionsSVG = () => <SvgXml xml={Sections} />
  return (
    <SectionsSVG/>
  )
}