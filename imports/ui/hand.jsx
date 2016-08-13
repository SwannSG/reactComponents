import React, { Component } from 'react';
import { addStylePrefixes, delStylePropeties} from '../custom/componentHelpers'
import './hand.css'     // import component stylesheet

export { East, North, South, West }

class HandNS extends Component {
    // <North hand={ x } cardheight={180} meta={true} hide={false}/>
    constructor() {
        super();
        this.hand = {
            style: {
                backgroundColor: 'yellow',
                margin:0,
                /*position must be set relative to allow absolute positioning of the cards to work correctly*/
                position: 'relative',
            }
        };
        this.img = { style: {}};
        this.meta = {
            style: {
                backgroundColor: 'white',
                boxSizing: 'border-box',
                color: 'black',
                display: 'inline-block',
                fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                margin: '0',
                opacity: 0.65,
                padding: '0',
                position: 'absolute',
                textAlign: 'center'
            }
        }
        this.label = {
            style: {
                backgroundColor: 'black',
                color: 'white',
                display: 'inline-block',
                margin: '0',
                opacity: 0.6,
                padding: '3px',
                position: 'absolute',
            },
            value: ''
        }
        this.vulnerable = {
            style: {
                position: 'absolute',
                bottom: 0,
                opacity:  0.5
            }
        }
    }

    handWidth(height) {
        // aspect ratio (image_width/image_height) = 0.6885
        return height*2.285;
    }

    getArray() {
        if (this.props.faceup) {
            // show cards faceup
            return this.props.hand;
        }
        else {
            // show cards face down
            return ['cb','cb','cb','cb','cb','cb','cb','cb','cb','cb','cb','cb','cb'];
        }
    }

    showVulnerabilityNS() {
        // returns vulnerability
        this.vulnerable.display = true;
        this.vulnerable.style.height = this.props.cardheight*0.085;
        this.vulnerable.style.width = this.hand.style.width/3;
        this.vulnerable.style.left = this.vulnerable.style.width;
        if (this.props.vulnerable) {
            // vulnerable
            this.vulnerable.style.backgroundColor = 'red';
        }
        else {
            // not-vulnerable
            this.vulnerable.style.backgroundColor = 'green';
        }
    }

    render() {
        var arr = this.getArray();
        this.hand.style.height = this.props.cardheight;
        this.hand.style.width = this.handWidth(this.props.cardheight);
        this.img.style.height = this.props.cardheight;
        this.meta.style.bottom = this.props.cardheight*0.1;
        this.meta.style.fontSize = this.props.cardheight/11 +'px';
        this.meta.style.left = (this.hand.style.width - 0.88*this.hand.style.height)/2 + 'px';
        this.label.style.fontSize = this.props.cardheight/9 +'px';
        this.label.style.top = this.props.cardheight*0.4;
        this.label.style.left = this.hand.style.width/2.3;
        if (this.props.vulnerable===null) {
            this.vulnerable.display = false;
        }
        else {
            this.showVulnerabilityNS();
        }

        return (
            <div style={this.hand.style}>
                {arr.map(function(x, index) {
                    this.img.style.left =  this.hand.style.height*0.133*index;
                    return <img key={index} className={'HandNS-img'} src={x+'.svg'}  style={_.clone(this.img.style)}/>;
                }, this)}
                {this.props.meta ? <h4 className={'Hand-meta'} style={this.meta.style}>
                <span>{this.props.meta[0]}<br/></span>{this.props.meta[1]}</h4> : null}
                <h3 style={this.label.style}>{this.label.value}</h3>
                {this.vulnerable.display} ? <div style={this.vulnerable.style}></div> : null}
            </div>
        );
    }
}





class North extends HandNS {
    constructor() {
        super();
            this.label.value = 'North';
    }
}

class South extends HandNS {
    constructor() {
        super();
            this.label.value = 'South';
    }
}

class HandEW extends HandNS {
    constructor() {
        super();
        this.hand.style.width = 80;                                 // width set to card height
        this.hand.style.height = this.hand.style.width*2.285;       // calc height based on card size
        this.img.style.width = this.hand.style.width;               // image width set to card height
    }

    showVulnerabilityEW() {
        // returns vulnerability
        this.vulnerable.display = true;
        this.vulnerable.style.height = this.hand.style.height/3;
        this.vulnerable.style.width = this.props.cardheight*0.085;
        this.vulnerable.style.left = 0; // the one to change for east and west
        this.vulnerable.style.top = this.vulnerable.style.height;
        if (this.props.vulnerable) {
            // vulnerable
            this.vulnerable.style.backgroundColor = 'red';
        }
        else {
            // not-vulnerable
            this.vulnerable.style.backgroundColor = 'green';
        }
    }

    render() {
        var arr = this.getArray();
        this.hand.style.width = this.props.cardheight;
        this.hand.style.height = this.handWidth(this.props.cardheight);
        this.img.style.width = this.props.cardheight;
        this.meta.style.top = (this.hand.style.height - 0.88*this.hand.style.width)/2 - this.props.cardheight*0.21 + 'px';
        this.meta.style.fontSize = this.props.cardheight/11 +'px';
        this.meta.style.left = this.props.cardheight*0.1;
        this.meta.style.whiteSpace = 'nowrap';
        this.label.style.fontSize = this.props.cardheight/9 +'px';
        this.label.style.top = this.props.cardheight*0.84
        this.label.style.right = this.props.cardheight*0.27;

        if (this.props.vulnerable===null) {
            this.vulnerable.display = false;
        }
        else {
            this.showVulnerabilityEW();
        }

        return (
            <div style={this.hand.style}>
                {arr.map(function(x, index) {
                    this.img.style.top =  this.hand.style.width*0.133*index;
                    return <img key={index} className={'HandEW-img'} src={'horizontal/' + x +'.svg'}  style={_.clone(this.img.style)}/>;
                }, this)}
                {this.props.meta ? <h4 className={'HandWest-meta'} style={this.meta.style}>
                <span>{this.props.meta[0]}<br/></span>{this.props.meta[1]}</h4> : null}
                <h3 className={this.label.style.className} style={this.label.style}>{this.label.value}</h3>
                {this.vulnerable.display} ? <div style={this.vulnerable.style}></div> : null}
                {this.vulnerable.display} ? <div style={this.vulnerable.style}></div> : null}
            </div>
        );
    }
}

class East extends HandEW {
    constructor() {
        super();
            this.label.value = 'East';
            this.label.style.className = 'HandEast-meta'
    }
}

class West extends HandEW {
    constructor() {
        super();
            this.label.value = 'West';
            this.label.style.className = 'HandWest-meta'
    }
}
