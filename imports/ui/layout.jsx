import React, { Component } from 'react';

export { Container };

class Container extends Component {
    // Container component
    // this.props
    //      heightPercent:      percent of viewport height
    //      orStyle:            {style: value, ...}
    //      viewportHeight:     in px
    //      viewportWidth:      in px
    //      widthPercent:       percent of viewport width

    constructor() {
        super();
        this.container = {
            style: {
                backgroundColor: 'yellow',
                boxSizing: 'border-box',
                margin: 0,
                padding: 0
            }
        }
    }

    dynamicStyle(overwriteStyle={}) {
        var ds = {
            height: this.props.heightPercent * this.props.viewportHeight + 'px',
            width:  this.props.widthPercent * this.props.viewportWidth + 'px',
        }
        console.log(ds)
        return Object.assign(this.container.style, ds, this.props.orStyle);
    }
    render() {
        return <div style={this.dynamicStyle(this.props.orStyle)}></div>
    }
}

{/* <div id="north-row">
    <div id="north-left"></div>
    <div id="north-hand"></div>
    <div id="north-right"></div>
</div> --> */}
