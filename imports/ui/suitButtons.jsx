import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Radium from 'radium'
import { Button } from './button.jsx'

export { SuitButtons }

class SuitButtons extends Component {
    constructor(props) {
        super(props);
    }

    suitButtonsToDisplay(level, lastBid) {
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
        console.log('SuitButtons');
        console.log(this.props.levelSelected);
        console.log(this.props.lastBid);
        var showSuit = this.suitButtonsToDisplay(this.props.levelSelected, this.props.lastBid);
        console.log(showSuit);
        return (
            <div>
                { showSuit[0] ? <Button label={'\u2663'} size={this.props.size} value={'c'} updateState={this.props.updateState}/> : null }
                { showSuit[1] ? <Button cls="red" label={'\u2666'} size={this.props.size} value={'d'} updateState={this.props.updateState}/> : null }
                { showSuit[2] ? <Button cls="red" label={'\u2665'} size={this.props.size} value={'h'} updateState={this.props.updateState}/> : null }
                { showSuit[3] ? <Button label={'\u2660'} size={this.props.size} value={'s'} updateState={this.props.updateState}/> : null }
                { showSuit[4] ? <Button label={'nt'} size={this.props.size} value={'n'} updateState={this.props.updateState}/> : null }
            </div>
        )
    }
}

SuitButtons = Radium(SuitButtons)
SuitButtons.propTypes = {
    lastBid: PropTypes.string.isRequired,
    levelSelected: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    updateState: PropTypes.func.isRequired,
}
