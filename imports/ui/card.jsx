// Card is a base component
// provides a "card" with rounded corners
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
export { Card }

var baseStyles = {}
baseStyles.card = {
        boxSizing: 'border-box',
        borderRadius: '6px',
        boxShadow: 'rgba(88, 86, 86, 0.721569) 4px 5px 5px -1px',
        backgroundRepeat: 'repeat-x',
        backgroundImage: 'linear-gradient(rgb(233, 234, 241) 0%, rgb(106, 118, 208) 100%)'
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.baseStyles = baseStyles.card
    }

    // static defaultProps {
    //     aspectRatio: 1.618                   // width:height, golden ratio = 1.618
    //     size: 50,
    //     style: {}                            // overide styles
    // }
    //
    // static propTypes {
    //     aspectRatio: PropTypes.number
    //     size: PropTypes.number,
    //     style: PropTypes.object
    // }

    computeStyle() {
        // merges all CSS
        // merges styles in precedence order
        //     1. computed dynamicStyles css
        //     2. overide style passed as a props.style
        //     3. baseStyles
        var dynamicStyles = {
            height: this.props.size + 'px',
            width: this.props.aspectRatio * this.props.size  + 'px',
            padding: this.props.size * 0.1  + 'px'
        }
        return Object.assign(this.baseStyles, this.props.style, dynamicStyles);
    }

    render() {
        return (
            <div style={this.computeStyle()}></div>
        );
    }
}

Card.defaultProps = {
    aspectRatio: 1.618,                  // width:height, golden ratio = 1.618
    size: 100,
    style: {}
}

Card.propTypes = {
    aspectRatio: PropTypes.number,
    size: PropTypes.number,
    style: PropTypes.object
}
