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
       };
       this.updateState = this.updateState.bind(this);
       this.handleClick = this.handleClick.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit');
        console.log(this.refs.showOppPointCount.checked);
    }

    handleClick(event) {
        console.log('handleClick');
        Session.set('settings', {
            showOppPointCount: this.state.showOppPointCount,
            showOppCardFace: this.state.showOppCardFace,
            showPartnersCardFace: this.state.showPartnersCardFace,
            showPartnersPointCount: this.state.showPartnersPointCount,
            showOwnPointCount: this.state.showOwnPointCount,
        });
    }

    updateState(event) {
        console.log('updateState');
        if (event.target.name==='showOppPointCount') {
            console.log('showOppPointCount');
            console.log(event.target.checked);
            this.setState({showOppPointCount: event.target.checked});
        }
        else if (event.target.name==='showOppCardFace') {
            this.setState({showOppCardFace: event.target.checked});
        }
        else if (event.target.name==='showPartnersCardFace') {
            this.setState({showPartnersCardFace: event.target.checked});
        }
        else if (event.target.name==='showPartnersPointCount') {
            this.setState({showPartnersPointCount: event.target.checked});
        }
        else if (event.target.name==='showOwnPointCount') {
            this.setState({showOwnPointCount: event.target.checked});
        }
        console.log('*****************');
        console.log(this.state);
        console.log('*****************');
    }

    render() {
        return (
            <div>
                <i style={{color:'gray'}} className="fa fa-times" aria-hidden="true" onClick={this.handleClick}></i>
                <form>
                    <label>Show opponents point count and distribution</label>
                    <input type="checkbox" name="showOppPointCount"
                     checked={this.state.showPointCount} onChange={this.updateState} />

                    <label>Show opponents cards</label>
                    <input type="checkbox" name="showOppCardFace"
                    checked={this.state.showOppCardFace} onChange={this.updateState} />

                    <label>Show partners cards</label>
                    <input type="checkbox" name="showPartnersCardFace"
                     checked={this.state.showPartnersCardFace} onChange={this.updateState} />

                     <label>Show partners point count and distribution</label>
                     <input type="checkbox" name="showPartnersPointCount"
                      checked={this.state.showPartnersCount} onChange={this.updateState} />

                      <label>Show own point count and distribution</label>
                      <input type="checkbox" name="showOwnPointCount"
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
