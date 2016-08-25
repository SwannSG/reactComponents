import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import Radium from 'radium'
import 'font-awesome/css/font-awesome.css'

export { SettingsForm }

class SettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           showOppPointCount: false,
           showOppCardFace: false,
           showPartnersCardFace: false,
           showPartnersPointCount: false,
           showOwnPointCount: true,
       };
       this.updateState = this.updateState.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit');
        console.log(this.refs.showOppPointCount.checked);
    }

    updateState(event) {
        console.log('updateState');
        if (event.target.name==='showOppPointCount') {
            this.setState({showOppPointCount: event.target.checked});
        }
        if (event.target.name==='showOppCardFace') {
            this.setState({showOppCardFace: event.target.checked});
        }
        if (event.target.name==='showPartnersCardFace') {
            this.setState({showPartnersCardFace: event.target.checked});
        }
        if (event.target.name==='showPartnersPointCount') {
            this.setState({showPartnersPointCount: event.target.checked});
        }
        if (event.target.name==='showOwnPointCount') {
            this.setState({showOwnPointCount: event.target.checked});
        }
    }

    render() {
        return (
            <div>
                <i className="fa fa-times" aria-hidden="true"></i>
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
