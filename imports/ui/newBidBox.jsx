import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Radium from 'radium'
import { Button } from './button.jsx'
import { Divider } from './divider.jsx'
import { LevelButtons } from './levelButtons.jsx'
import { SuitButtons } from './suitButtons.jsx'

export { NewBidBox }

const styles = {};
styles.base = {
        boxSizing: 'border-box',
        borderRadius: '6px',
        boxShadow: 'rgba(88, 86, 86, 0.721569) 4px 5px 5px -1px',
        backgroundRepeat: 'repeat-x',
        backgroundImage: 'linear-gradient(rgb(233, 234, 241) 0%, rgb(106, 118, 208) 100%)'
};

class NewBidBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.cycle = 'initial';
        this.updateState = this.updateState.bind(this);
        this.bidLevel = parseInt(this.props.lastBid.charAt(0));
        this.bidSuit = this.props.lastBid.charAt(1);
    }

    dynamicStyles() {
        return {
                height: this.props.size + 'px',
                width: this.props.aspectRatio * this.props.size  + 'px',
                padding: this.props.size * 0.1  + 'px'
            };
    }

    updateState(e) {
        console.log('updateState')
        console.log(e.currentTarget.value);
        console.log('********');
        if (e.currentTarget.value === 'pass' || e.currentTarget.value === 'dbl') {
            this.setState({cycle:'exit'});
        }
        else {
            if (e.currentTarget.value==='c' || e.currentTarget.value==='d' || e.currentTarget.value==='h' || e.currentTarget.value==='s' || e.currentTarget.value==='n') {
                // we have a new bid, end here
                var bid = this.state.level + e.currentTarget.value   // level + suit
                console.log(bid);
                this.setState({cycle:'exit'});
            }
            else {
                // level is set
                this.setState({cycle:'levelSelected', level:e.currentTarget.value});
            }
        }
    }

    render() {
        console.log('NewBidBox');

        if (this.state.cycle==='exit') {
            // set null in DOM
            return null;
        }
        return (
            <div size={130} style={[styles.base, this.dynamicStyles()]}>
               <Button cls="pass" label="Pass" size={40} value='pass' updateState={this.updateState}/>
               <Button cls="dbl" label="Dbl" size={40} value='dbl' updateState={this.updateState}/>
               <Divider size={100} />
               <LevelButtons lastBid={this.props.lastBid} size={40} updateState={this.updateState}/>
               {(this.state.cycle==='levelSelected') ? <SuitButtons lastBid={this.props.lastBid} levelSelected={parseInt(this.state.level)} size={40} updateState={this.updateState}/> : null}
            </div>
        );
    }
}

NewBidBox = Radium(NewBidBox);

NewBidBox.defaultProps = {
    aspectRatio: 1.618,                  // width:height, golden ratio = 1.618
    size: 100,
};

NewBidBox.propTypes = {
    aspectRatio: PropTypes.number,
    lastBid: PropTypes.string.isRequired,
    size: PropTypes.number,
}
