import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import Radium from 'radium'
import 'font-awesome/css/font-awesome.css'
import { Session } from 'meteor/session';


export { SettingsForm }

class SettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           showOppPointCount: this.props.settings.showOppPointCount,
           showOppCardFace: this.props.settings.showOppCardFace,
           showPartnersCardFace: this.props.settings.showPartnersCardFace,
           showPartnersPointCount: this.props.settings.showPartnersPointCount,
           showOwnPointCount: this.props.settings.showOwnPointCount,
           cycle: 'wip'
       };
       this.updateState = this.updateState.bind(this);
       this.handleExit = this.handleExit.bind(this);
    }


    handleExit(event) {
        console.log('handleClick');
        Session.set('settings', {
            showOppPointCount: this.refs.showOppPointCount.checked,
            showOppCardFace: this.refs.showOppCardFace.checked,
            showPartnersCardFace: this.refs.showPartnersCardFace.checked,
            showPartnersPointCount: this.refs.showPartnersPointCount.checked,
            showOwnPointCount: this.refs.showOwnPointCount.checked,
        });
        this.setState({cycle:'exit'});
    }

    updateState(event) {
        console.log('updateState');
        console.log(event.target.name + ': ' + event.target.checked)
        var obj = {};
        obj[event.target.name] = event.target.checked;
        this.setState(obj);
        // this.data[event.target.name] = event.target.checked;
    }

    render() {
        console.log('render');
        if (this.state.cycle==='exit') {
            // set null in DOM
            return null;
        }
        return (
            <div>
                <i style={{color:'gray'}} className="fa fa-times" aria-hidden="true" onClick={this.handleExit}></i>
                <form>
                    <label>Show opponents point count and distribution</label>
                    <input type="checkbox" name="showOppPointCount" ref="showOppPointCount"
                     checked={this.state.showPointCount} onChange={this.updateState} />

                    <label>Show opponents cards</label>
                    <input type="checkbox" name="showOppCardFace" ref="showOppCardFace"
                    checked={this.state.showOppCardFace} onChange={this.updateState} />

                    <label>Show partners cards</label>
                    <input type="checkbox" name="showPartnersCardFace" ref="showPartnersCardFace"
                     checked={this.state.showPartnersCardFace} onChange={this.updateState} />

                     <label>Show partners point count and distribution</label>
                     <input type="checkbox" name="showPartnersPointCount" ref="showPartnersPointCount"
                      checked={this.state.showPartnersCount} onChange={this.updateState} />

                      <label>Show own point count and distribution</label>
                      <input type="checkbox" name="showOwnPointCount" ref="showOwnPointCount"
                       checked={this.state.showOwnPointCount} onChange={this.updateState} />
                </form>
            </div>
        );
    }
}

// {  showOppPointCount: false,
//    showOppCardFace: false,
//    showPartnersCardFace: false,
//    showPartnersPointCount: false,
//    showOwnPointCount: true,
// }



// modal.style.display = "block";
// modal.style.display = "none";
