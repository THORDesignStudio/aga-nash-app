import * as React from 'react';
import  {SvgXml} from 'react-native-svg';



export default function BeginIcon(props) {
    
    const Begin = `
    <svg width="235px" height="74px" viewBox="0 0 235 74" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="App-Home" transform="translate(-42.000000, -334.000000)">
                <g id="Group" transform="translate(42.000000, 334.000000)">
                    <circle id="Oval-Copy-8" fill="#FFFFFF" cx="118" cy="23" r="23"></circle>
                    <polygon id="Triangle" fill="#E49917" transform="translate(120.500000, 23.000000) rotate(90.000000) translate(-120.500000, -23.000000) " points="120.5 16 129 30 112 30"></polygon>
                </g>
            </g>
        </g>
    </svg>`

const BeginIconSVG = () => <SvgXml xml={Begin} />
  return (
    <BeginIconSVG/>
  )
}