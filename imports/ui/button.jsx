// baseComponents contains basic components that can be built on
// Always create a variant of a base component from the base component
// The variant is used for a specific Problem Domain
// class NewVariant extends BaseComponent

import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
export { Button }

// we try to deliver components with in-line style
// we only use a stylesheet when the css property is not supported by ReactJS
// we maintain baseStyles here
var baseStyles = {}
baseStyles.button = {
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

class Button extends Component {
    // Basic button
    // this.props

    constructor(props) {
        super(props);
        this.baseStyles = baseStyles.button;
    }

    // static not currently supported in Meteor 1.4 ******************
    // We use a work around
    //      Button.propTypes = {}
    // static propTypes = {
    //     size: PropTypes.number,
    //     value: PropTypes.string,
    //     label: PropTypes.string,
    //     style: PropTypes.object
    // };

    // static defaultProps = {
    //     size: 50,
    //     value: 'value',
    //     label: 'Label',
    //     style: {}
    // };
    // end static ****************************************************

    computeStyle() {
        // merges all CSS
        // merges styles in precedence order
        //     1. computed dynamicStyles css
        //     2. overide style passed as a props.style
        //     3. baseStyles
        var dynamicStyles = {
            margin: 0.1 * this.props.size  + 'px',
            padding: 0.106 * this.props.size + 'px ' + 0.106 * this.props.size + 'px',
            border: 0.0165 * this.props.size + 'px solid transparent',
            fontSize: 0.44 * this.props.size +'px'
        }
        return Object.assign(this.baseStyles, this.props.style, dynamicStyles)
    }

    render() {
        console.log('Button Base');
        return (
            <button style={this.computeStyle()} onClick={this.props.onclick} value={this.props.value}>
                {this.props.label}
            </button>
        );
    }
}

// workaround because static inside component does not work ******************
Button.defaultProps = {
    label: 'Label',
    onclick: function() {},             //function does nothing, but prevent error messes from propTypes
    size: 50,
    style: {},
    value: 'value',
};

Button.propTypes = {
    label: PropTypes.string,
    onclick: PropTypes.func,
    size: PropTypes.number,
    style: PropTypes.object,
    value: PropTypes.string,
};
// end of workaround because static inside component does not work ************
