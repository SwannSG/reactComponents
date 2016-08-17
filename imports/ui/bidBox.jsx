import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Button, ButtonToolbar, Well } from 'react-bootstrap';
import './bidBox.css'

export { BidBox };

class BidBox extends Component {
    constructor() {
        super();
        this.container = {
            style: {
                // style that is not dynamic
                boxSizing: 'border-box',
                borderRadius: '6px',
                boxShadow: 'rgba(88, 86, 86, 0.721569) 4px 5px 5px -1px',
                backgroundRepeat: 'repeat-x',
                backgroundImage: 'linear-gradient(rgb(233, 234, 241) 0%, rgb(106, 118, 208) 100%)'
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
        this.cbSuitButtons = function cbSuitButtons(event) {
                var level = event.currentTarget.value;
                var lastBid = event.currentTarget.getAttribute('data-attr1');
                var containerHeight  = event.currentTarget.getAttribute('data-attr2');
                render(
                    <SuitButtons containerHeight={containerHeight} level={level} lastBid={lastBid} />,
                    document.getElementById('suitButtonsID'));
            }

    }

    dsContainer(x) {
        // dynamically style (ds) container
        // x --> container height
        var ds =  {
            height: x + 'px',
            width: 1.618 * x  + 'px',
            padding: 0.1 * x  + 'px'
        };
        // merge static and dynamic objects
        return Object.assign(this.container.style, ds);
    }

    displayLevel(level) {
        if (this.bidLevel < level) {
            return true;
        }
        if (this.bidLevel > level) {
            return false;
        }
        if (this.bidLevel===level && this.bidSuit!=='n') {
            return true;
        }
        return false;
    }


    render() {
        this.bidLevel = parseInt(this.props.lastBid.charAt(0));
        this.bidSuit = this.props.lastBid.charAt(1);
        return (
            <div style={this.dsContainer(this.props.containerHeight)}>
                <Button label={'Pass'} scale={this.props.containerHeight} orStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(rgb(61, 162, 27) 0%, rgb(105, 220, 18) 100%)'}}
                    onClickFunction={function() {console.log('hello');}}
                />
                <Button label={'Dbl'} scale={this.props.containerHeight} orStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(rgb(167, 46, 10) 0%, rgb(249, 26, 3) 100%)'}}
                />
                <Divider scale={this.props.containerHeight}/>
                <div>
                    {this.displayLevel(1) ? <Button label={'1'} value={1} scale={this.props.containerHeight}
                    lastBid={this.props.lastBid} callback={this.cbSuitButtons}/> : null}
                    {this.displayLevel(2) ? <Button label={'2'} scale={this.props.containerHeight}/> : null}
                    {this.displayLevel(3) ? <Button label={'3'} scale={this.props.containerHeight}/> : null}
                    {this.displayLevel(4) ? <Button label={'4'} scale={this.props.containerHeight}/> : null}
                    {this.displayLevel(5) ? <Button label={'5'} scale={this.props.containerHeight}/> : null}
                    {this.displayLevel(6) ? <Button label={'6'} scale={this.props.containerHeight}/> : null}
                    {this.displayLevel(7) ? <Button label={'7'} scale={this.props.containerHeight}/> : null}
                </div>
                <Divider scale={this.props.containerHeight}/>
                <div id={'suitButtonsID'}></div>
            </div>
        )
    }
}




class SuitButtons extends Component {
    constructor() {
        super();
        this.suitButtons = {
            style: {
            }
        }
    }

    dsDivider(x, orStyle={}) {
        var ds = {
        };
        return Object.assign(this.divider.style, orStyle, ds);
    }

    displaySuitButtons(level, lastBid) {
        console.log('displaySuitButtons');
        console.log(level);
        console.log(typeof(level));
        console.log(lastBid);
        bidLevel = parseInt(lastBid.charAt(0));
        bidSuit = lastBid.charAt(1);
        console.log(bidLevel);
        console.log(bidSuit);
        console.log('*********');
        if (parseInt(level)===bidLevel) {
            if (bidSuit==='c') {
                return [false, true, true, true, true];
            }
            else if (bidSuit==='d') {
                return [false, false, true, true, true];
            }
            else if (bidSuit==='h') {
                return [false, false, false, true, true];
            }
            else if (bidSuit==='s') {
                return [false, false, false, false, true];
            }
        }
        return [true, true, true, true, true];
    }


    render() {
        console.log('SuitButtons');
        var showSuit = this.displaySuitButtons(this.props.level, this.props.lastBid);
        console.log(showSuit);
        return (
            <div>
                { showSuit[0] ? <Button label={'\u2663'} scale={this.props.containerHeight}/> : null }
                { showSuit[1] ? <Button label={'\u2666'} scale={this.props.containerHeight} orStyle={{
                    color: 'red',}}/> : null }
                { showSuit[2] ? <Button label={'\u2665'} scale={this.props.containerHeight} orStyle={{
                    color: 'red',}}/> : null }
                { showSuit[3] ? <Button label={'\u2660'} scale={this.props.containerHeight} cb={'buttonSpades'}/> : null }
                { showSuit[4] ? <Button label={'nt'} scale={this.props.containerHeight} cb={'buttonSpades'}/> : null }
            </div>
        )
    }
}





class Divider extends Component {
    constructor() {
        super();
        this.divider = {
            style: {
                opacity: 0,
            }
        }
    }

    dsDivider(x, orStyle={}) {
        var ds = {
            height: 0.06 * x  + 'px',
        };
        return Object.assign(this.divider.style, orStyle, ds);
    }

    render() {
        return (
            <div style={style=this.dsDivider(this.props.scale)}></div>
        );
    }
}

function bidLevelOnClick(event) {
    render(<SuitButtons containerHeight={220} />, document.getElementById('suitButtonsID'));
}


class Button extends Component {
    constructor() {
        super();
        this.button = {
            // static style
            style: {
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
            },
            // cb: function cb(event) {
            //     render(<SuitButtons containerHeight={220} />, document.getElementById('suitButtonsID'));
            // }
            cb: null,
        }
    }

    dsButton(x={}, orStyle={}) {
        // dynamic style
        // what is x ?
        // BidBox container height in this context
        // but we need something more general
        // [min (0), med (500), max (1000)] and then project scale
        var ds = {
            margin: 0.025 * x  + 'px',
            padding: 0.0265 * x + 'px ' + 0.0265 * x + 'px',
            // lineHeight:0.0065 * x,
            border: 0.0035 * x + 'px solid transparent',
            fontSize: 0.11 * x +'px'
        };
        return Object.assign(this.button.style, orStyle, ds);
    }

    buttonClicked(event) {
        event.preventDefault;
        console.log('buttonClicked');
        window.skaap = event.currentTarget;
        this.button.cb(event);
        // render(<SuitButtons containerHeight={220} />, document.getElementById('suitButtonsID'));
    }

    render() {
        console.log('Button Component');
        (this.props.callback) ? this.button.cb=this.props.callback : this.button.cb=null;

        return (
            <button style={this.dsButton(this.props.scale, this.props.orStyle)}
            onClick={this.buttonClicked.bind(this)} value={this.props.value} data-attr1={this.props.lastBid}
            data-attr2={this.props.scale}
            >
                {this.props.label}
            </button>
        )
    }
}
