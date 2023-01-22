import React, { Component } from 'react';

import './FogEffect.css';

class FogEffect extends Component {
    render() {
        return (
            <div>
                <div className="fog-container">
                    <div className="fog-img fog-img-first"></div>
                    <div className="fog-img fog-img-second"></div>
                </div>
            </div>
        );
    }
}
export default FogEffect;