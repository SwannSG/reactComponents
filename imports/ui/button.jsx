import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Radium from 'radium'

export { Button }

// we try to deliver components with in-line style
// we only use a stylesheet when the css property is not supported by ReactJS
// we maintain baseStyles here
const styles = {}
styles.base = {
    display: 'inline-block',
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    borderRadius: '5px',
    boxShadow: 'rgba(88, 86, 86, 0.721569) 4px 5px 5px -1px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    backgroundRepeat: 'repeat-x',
    backgroundImage: 'linear-gradient(rgb(233, 234, 241) 0%, rgb(106, 118, 208) 100%)',
    fontWeight: 400
}
styles.pass = {
    // pass button style
    color: 'white',
    backgroundImage: 'linear-gradient(rgb(61, 162, 27) 0%, rgb(105, 220, 18) 100%)'
}

styles.dbl = {
    // Dbl button style
    color: 'white',
    backgroundImage: 'linear-gradient(rgb(167, 46, 10) 0%, rgb(249, 26, 3) 100%)'
}

styles.red = {
    color:'red',
}

class Button extends Component {
    // Basic button
    // this.props

    constructor(props) {
        super(props);
    }

    dynamicStyles() {
        // css property values that are calculated at runtime
        return {
            margin: 0.15 * this.props.size  + 'px',
            padding: 0.106 * this.props.size + 'px ' + 0.106 * this.props.size + 'px',
            border: 0.0165 * this.props.size + 'px solid transparent',
            fontSize: 0.44 * this.props.size +'px'
        };
    }

    render() {
        console.log('Button Base');
        return (
            <button style={[styles.base, styles[this.props.cls], this.dynamicStyles()]}
                onClick={this.props.updateState} value={this.props.value} >
                {this.props.label}
            </button>
        );
    }
}

Button = Radium(Button);                //@Radium decorator does not work


// workaround because static inside component does not work ******************
Button.defaultProps = {
    cls: '',
    label: 'Label',
    onclick: function() {},             //function does nothing, but prevent error messes from propTypes
    size: 50,
    style: {},
    value: 'value',
};

Button.propTypes = {
    cls: PropTypes.string,
    label: PropTypes.string,
    onclick: PropTypes.func,
    size: PropTypes.number,
    style: PropTypes.object,
    value: PropTypes.string,
};
// end of workaround because static inside component does not work ************
