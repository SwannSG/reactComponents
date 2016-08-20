import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Radium from 'radium'

export { Divider }

const styles = {}
styles.base = {
    opacity: 0
}

class Divider extends Component {
    constructor(props) {
        super(props);
    }

    dynamicStyles() {
        // css property values that are calculated at runtime
        return {
            height: 0.03 * this.props.size  + 'px',
        };
    }

    render() {
        return (
            <div style={[styles.base, styles[this.props.cls], this.dynamicStyles()]}></div>
        );
    }
}

Divider = Radium(Divider);
Divider.defaultProps = {
    size: 50
}
Divider.propTypes = {
    size: PropTypes.number
}
