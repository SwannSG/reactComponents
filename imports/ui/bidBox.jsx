import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Radium from 'radium'
import { Button } from './button.jsx'
import { Divider } from './divider.jsx'
import { LevelButtons } from './levelButtons.jsx'
import { SuitButtons } from './suitButtons.jsx'

export { BidBox }


const styles = {};
styles.base = {
        boxSizing: 'border-box',
        borderRadius: '6px',
        boxShadow: 'rgba(88, 86, 86, 0.721569) 4px 5px 5px -1px',
        backgroundRepeat: 'repeat-x',
        backgroundImage: 'linear-gradient(rgb(233, 234, 241) 0%, rgb(106, 118, 208) 100%)',
        zIndex: 1000,
};

class BidBox extends Component {
    constructor(props) {
        super(props);
        // setup state
        this.state = {};
        this.state.cycle = 'initial';
        // end setup state
        // provides reference to method updateState(e), always executed in the parent
        this.updateState = this.updateState.bind(this);
        this.bidLevel = parseInt(this.props.lastBid.charAt(0));
        this.bidSuit = this.props.lastBid.charAt(1);
        // component size
        this.height = 0;
        this.width = 0;
    }

    dynamicStyles() {
        this.height = this.props.size;
        this.width = this.props.aspectRatio * this.props.size;
        if (this.width > 0.9*this.props.parentDim.width) {
            this.width = 0.9*this.props.parentDim.width;
            this.height = this.width/this.props.aspectRatio;
        }
        return {
                height: this.height + 'px',
                width: this.width  + 'px',
                paddingTop: this.height * 0.08  + 'px',
                paddingRight: this.height * 0.1  + 'px',
                paddingBottom: this.height * 0.1  + 'px',
                paddingLeft: this.height * 0.1  + 'px',
            };
    }

    updateState(e) {
        var bid;
        if (e.currentTarget.value === 'pass' || e.currentTarget.value === 'dbl') {
            // pass or dbl, end here
            bid = e.currentTarget.value;
            this.setState({cycle:'exit'});
        }
        else {
            if (e.currentTarget.value==='c' || e.currentTarget.value==='d' || e.currentTarget.value==='h' || e.currentTarget.value==='s' || e.currentTarget.value==='n') {
                // we have a new bid, suit is selected, end here
                var bid = this.state.level + e.currentTarget.value   // level + suit
                this.setState({cycle:'exit'});
            }
            else {
                // level is set, wait for suit
                this.setState({cycle:'levelSelected', level:e.currentTarget.value});
            }
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        if (this.state.cycle==='exit') {
            // set null in DOM
            return null;
        }
        return (
            <div size={this.height} style={[styles.base, this.dynamicStyles()]}>
               <Button cls="pass" label="Pass" size={this.height*0.25} value='pass' updateState={this.updateState}/>
               <Button cls="dbl" label="Dbl" size={this.height*0.25} value='dbl' updateState={this.updateState}/>
               <Divider size={this.height*0.72} />
               <LevelButtons lastBid={this.props.lastBid} size={this.height*0.235} updateState={this.updateState}/>
               <Divider size={this.height*0.72} />
               {(this.state.cycle==='levelSelected') ? <SuitButtons lastBid={this.props.lastBid} levelSelected={parseInt(this.state.level)} size={this.height*0.25} updateState={this.updateState}/> : null}
            </div>
        );
    }
}

// allows use of Radium functionality
BidBox = Radium(BidBox);

BidBox.defaultProps = {
    aspectRatio: 1.618,                  // width:height, golden ratio = 1.618
    size: 100,
};

BidBox.propTypes = {
    aspectRatio: PropTypes.number,
    lastBid: PropTypes.string.isRequired,
    size: PropTypes.number,
}
