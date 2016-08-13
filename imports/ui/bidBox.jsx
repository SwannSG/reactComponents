import React, { Component } from 'react';
// import { Button, ButtonToolbar, Well } from 'react-bootstrap';
import './bidBox.css'

export { BidBox };

const ob1 = {cat1:'cat1', dog1:'dog1'};
const ob2 = {cat2:'cat2', dog2:'dog2'}; // obj2 adds to or overides obj1
const merged = {...ob1, ...ob2};
console.log(merged);

const merge = {...[ob1, ob2]};
console.log(merge);


class BidBox extends Component {
    constructor() {
        super();
        this.container = {
            style: {
                backgroundColor: 'yellow',
                width: '50px',
                height: '50px',
            }
        }
        this.anyButton = {
            style: {

            },
        }
        this.passButton = {
            style: {
                backgroundColor: 'green'
            },
        }
    }

    render() {
        this.container.style.height = this.props.containerHeight          // used to set size of container and sub-elements
        this.container.style.width = 1.618 * this.props.containerHeight   // golden ratio
        return (
            <div style={this.container.style}>
                <button className={"btn"} style={this.passButton.style}>Pass</button>
                <button className={"btn"} style={this.passButton.style}>Dbl</button>
            </div>
        )
    }

}

class Button extends Component {
    constructor() {
        super();
        this.button = {
            style: {

            },
            value: 'Button'
        }
    }

    render() {
        return (
            <button style={this.button.style}>{this.button.value}</button>
        )
    }

}
