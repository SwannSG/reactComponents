import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Button } from './button.jsx'
import Radium from 'radium'
import { bm } from '../custom/myJsLib.js'
import { Session } from 'meteor/session';

export { Deal }

const styles = {}
styles.base = {
}

class Deal extends Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        Session.set('dealToggle', Session.get('dealToggle')==='a' ? 'b' : 'a');
        console.log(Session.get('dealToggle'));
        bm.shuffle();
    }

    render() {
        return (
            <div>
                <Button label={'Deal'} value={'deal'} updateState={this.updateState} />
            </div>
    )
    }
}

{/* label: 'Label',
onclick: function() {},
size: 50,
style: {},
value: 'value', */}
