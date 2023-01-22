import React, { Component } from 'react';

import './DecoButton.css';

class DecoButton extends Component {
 
    render() {
        return (
            <div>
               <a className="btn-gold" href={this.props.url}>
                        <span class="btn-text">{this.props.title}</span>
                        <svg version="1.1" id="Layer_1" x="0px" y="0px" width="337px" height="68px"
                            viewBox="0 0 337 68" className='svg-class '>
                            <g>
                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="14.1012" y1="34"
                                    x2="322.8987" y2="34">
                                    <stop offset="0" className='offset0' />
                                    <stop offset="1" className='offset1' />
                                </linearGradient>
                                <polygon class="st0"
                                    points="310,12 27,12 14.1,24.9 14.1,43.1 27,56 310,56 322.9,43.1 322.9,24.9 	" />
                            </g>
                            <g>
                                <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="168.5" y1="4.6422"
                                    x2="168.5" y2="63.3578">
                                    <stop offset="0"  className='offset0' />
                                    <stop offset="1" className='offset1' />
                                </linearGradient>
                                <path className="st1" d="M311.9,8.1L327,23.3v21.4l-15.1,15.1H25.1L10,44.7V23.3L25.1,8.1H311.9 M313.3,4.6H23.7L6.5,21.8v24.3
		l17.2,17.2h289.6l17.2-17.2V21.8L313.3,4.6L313.3,4.6z" />
                            </g>
                            <g>
                                <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="168.5" y1="12"
                                    x2="168.5" y2="56">
                                    <stop offset="0"  className='offset0' />
                                    <stop offset="1" className='offset1' />
                                </linearGradient>
                                <path className="st2" d="M309.5,13.2l12.2,12.2v17.2l-12.2,12.2h-282L15.3,42.6V25.4l12.2-12.2H309.5 M310,12H27L14.1,24.9v18.2L27,56
		h283l12.9-12.9V24.9L310,12L310,12z" />
                            </g>
                        </svg>
                    </a>
            </div>
        );
    }
}
export default DecoButton;