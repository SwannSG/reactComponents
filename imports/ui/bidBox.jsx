import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
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

        // callback function to be used on suit buttons
        this.cbSuitButtons = function cbSuitButtons(event) {
                var level = event.currentTarget.value;
                var lastBid = event.currentTarget.getAttribute('data-lastbid');
                var scale  = event.currentTarget.getAttribute('data-scale');
                render(
                    <SuitButtons containerHeight={scale} level={level} lastBid={lastBid} />,
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
                    {/* a bunch of buttons call LevelButton */}
                    {this.displayLevel(1) ? <LevelButton label={'1'} value={1} scale={this.props.containerHeight} lastBid={this.props.lastBid} callback={this.cbSuitButtons}/> : null}
                    {this.displayLevel(2) ? <LevelButton label={'2'} value={2} scale={this.props.containerHeight} lastBid={this.props.lastBid} callback={this.cbSuitButtons}/> : null}
                    {this.displayLevel(3) ? <LevelButton label={'3'} value={3} scale={this.props.containerHeight} lastBid={this.props.lastBid} callback={this.cbSuitButtons}/> : null}
                    {this.displayLevel(4) ? <LevelButton label={'4'} value={4} scale={this.props.containerHeight} lastBid={this.props.lastBid} callback={this.cbSuitButtons}/> : null}
                    {this.displayLevel(5) ? <LevelButton label={'5'} value={5} scale={this.props.containerHeight} lastBid={this.props.lastBid} callback={this.cbSuitButtons}/> : null}
                    {this.displayLevel(6) ? <LevelButton label={'6'} value={6} scale={this.props.containerHeight} lastBid={this.props.lastBid} callback={this.cbSuitButtons}/> : null}
                    {this.displayLevel(7) ? <LevelButton label={'7'} value={7} scale={this.props.containerHeight} lastBid={this.props.lastBid} callback={this.cbSuitButtons}/> : null}
                    {/* end LevelButton */}
                </div>
                <Divider scale={this.props.containerHeight}/>
                <div id={'suitButtonsID'}></div>
            </div>
        )
    }
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
            // callback function to be run when buttonClicked
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
        console.log('buttonClicked');
        event.preventDefault;
        // run the callback
        this.button.cb(event);
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
        );
    }
}


class LevelButton extends Button {
    // LevelButton requires following props
    //      callback:   callback function to execute when LevelButton is clicked
    //      scale:      scale for size of button
    //      value:      value associated with the button
    //      lastBid:    the value of lastBid

    render() {
        (this.props.callback) ? this.button.cb=this.props.callback : this.button.cb=null;

        return (
            <button style={this.dsButton(this.props.scale, this.props.orStyle)}
            onClick={this.buttonClicked.bind(this)} value={this.props.value} data-lastbid={this.props.lastBid}
            data-scale={this.props.scale}
            >
                {this.props.label}
            </button>
        );
    }
}

class SuitButton extends Button {
    // Suit Button requires following props
    //      callback:   callback function to execute when button is clicked
    //      label:      label for button
    //      level:      the value selected for level of bid
    //      scale:      sizes the element
    //      value:      value associated with the button

    render() {
        (this.props.callback) ? this.button.cb=this.props.callback : this.button.cb=null;

        return (
            <button style={this.dsButton(this.props.scale, this.props.orStyle)}
            onClick={this.buttonClicked.bind(this)} value={this.props.value} data-level={this.props.level}
            >
                {this.props.label}
            </button>
        );
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

class SuitButtons extends Component {
    constructor() {
        super();
        this.suitButtons = {
            style: {
            }
        };
        this.cbSuitButton = function cbSuitButton(event) {
            var suit = event.currentTarget.value;
            var level = event.currentTarget.getAttribute('data-level');
            var newBid = level + suit;
            console.log('latestBid: ' + newBid);
        };
    }

    dsDivider(x, orStyle={}) {
        var ds = {
        };
        return Object.assign(this.divider.style, orStyle, ds);
    }

    displaySuitButtons(level, lastBid) {
        console.log('displaySuitButtons');
        bidLevel = parseInt(lastBid.charAt(0));
        bidSuit = lastBid.charAt(1);
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
        var showSuit = this.displaySuitButtons(this.props.level, this.props.lastBid);
        return (
            <div>
                { showSuit[0] ? <SuitButton label={'\u2663'} callback={this.cbSuitButton}
                  level={this.props.level} scale={this.props.containerHeight}
                  value={'c'} data-level={this.props.level}/>
                 : null }
                 { showSuit[1] ? <SuitButton label={'\u2666'}  callback={this.cbSuitButton}
                   level={this.props.level} orStyle={{color: 'red',}} scale={this.props.containerHeight}
                   value={'d'} data-level={this.props.level}/>
                 : null }
                 { showSuit[2] ? <SuitButton label={'\u2665'}  callback={this.cbSuitButton}
                   level={this.props.level} orStyle={{color: 'red',}} scale={this.props.containerHeight}
                   value={'h'} data-level={this.props.level}/>
                 : null }
                 { showSuit[3] ? <SuitButton label={'\u2660'} callback={this.cbSuitButton}
                   level={this.props.level} scale={this.props.containerHeight}
                   value={'s'} data-level={this.props.level}/>
                  : null }
                  { showSuit[4] ? <SuitButton label={'nt'} callback={this.cbSuitButton}
                    level={this.props.level} scale={this.props.containerHeight}
                    value={'n'} data-level={this.props.level}/>
                   : null }
            </div>
        )
    }
}
