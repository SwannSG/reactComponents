import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Radium from 'radium'
import { Button } from './button.jsx'

export { LevelButtons }

class LevelButtons extends Component {
    constructor(props) {
        super(props);
    }

    levelToDisplay (level) {
        // determine what bid level buttons should be displayed
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
            <div>
                {this.levelToDisplay(1) ? <Button label="1" size={this.props.size} value="1" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(2) ? <Button label="2" size={this.props.size} value="2" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(3) ? <Button label="3" size={this.props.size} value="3" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(4) ? <Button label="4" size={this.props.size} value="4" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(5) ? <Button label="5" size={this.props.size} value="5" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(6) ? <Button label="6" size={this.props.size} value="6" updateState={this.props.updateState} /> : null}
                {this.levelToDisplay(7) ? <Button label="7" size={this.props.size} value="7" updateState={this.props.updateState} /> : null}
            </div>
        )
    }
}

LevelButtons = Radium(LevelButtons);
LevelButtons.propTypes = {
    size: PropTypes.number.isRequired,
    lastBid: PropTypes.string.isRequired,
    updateState: PropTypes.func.isRequired,
}
