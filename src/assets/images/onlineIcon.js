import * as React from 'react';
import  {SvgXml} from 'react-native-svg';



export default function OnlineIcon(props) {
    
    const Online = `<svg width="53px" height="78px" viewBox="0 0 53 78" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="App-Home" transform="translate(-134.000000, -547.000000)">
            <g id="Group-4" transform="translate(134.000000, 547.000000)">
                <rect id="Rectangle-5-Copy-25" fill="#E49917" fill-rule="nonzero" x="0" y="0" width="53" height="53" rx="15"></rect>
                <g id="Group-9-Copy" transform="translate(26.745763, 27.000000) rotate(-360.000000) translate(-26.745763, -27.000000) translate(9.745763, 10.000000)" stroke="#FFFFFF" stroke-width="3.15">
                    <path d="M34,17 C34,26.3889091 26.387875,34 16.9990721,34 C7.6102691,34 0,26.3889091 0,17 C0,7.6110909 7.6102691,5.68434189e-14 16.9990721,5.68434189e-14 C26.387875,5.68434189e-14 34,7.6110909 34,17 Z" id="Stroke-1"></path>
                    <path d="M23,17 C23,26.3889091 20.0906516,34 16.5,34 C12.9112533,34 10,26.3889091 10,17 C10,7.6110909 12.9112533,5.68434189e-14 16.5,5.68434189e-14 C20.0906516,5.68434189e-14 23,7.6110909 23,17 Z" id="Stroke-3"></path>
                    <line x1="0" y1="22.5" x2="33" y2="22.5" id="Stroke-5"></line>
                    <line x1="0" y1="10.5" x2="33" y2="10.5" id="Stroke-7"></line>
                </g>
            </g>
        </g>
    </g>
</svg>`

const OnlineSVG = () => <SvgXml xml={Online} />
  return (
    <OnlineSVG/>
  )
}