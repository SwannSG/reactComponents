import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import Radium from 'radium'
import { Session } from 'meteor/session';
import './settingsForm.css'

export { SettingsForm }

var styles = {
    base: {},
    parent: {
        backgroundColor: 'gray',
        backgroundColor: '#fff',
        border: '1px solid rgba(0,0,0,.6)',
        position: 'absolute',
        fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        fontWeight:200,
        borderRadius: '6px',
        boxShadow: 'rgba(88, 86, 86, 0.721569) 4px 5px 5px -1px',
    },
    heading: {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding-bottom: 10px;
        padding-top: 10px;
        border-bottom: 1px solid gray;
        line-height: 1.25;




    },
    headSection: {
        padding: 0,
        margin: 0,
        borderBottom: '1px solid gray',
    },
    close: {
        float:'right',
        display: 'inline-block',
        padding: 0,
        cursor: 'pointer',
        background: '0 0',
        border: 0,
    },
    entry: {
    },
    label: {
        float: 'left',
        display: 'inline-block',
        width: '100%',
    },
    input: {
        float: 'right',
        display: 'inline-block',
        boxShadow: 'rgba(88, 86, 86, 0.721569) 1px 2px 2px -2px',
    }
}



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

    dynamicStyles() {
        var ds = {   
                margin: 0,
                pading.1 * this.props.height + 'px ' + 0.15 * this.props.height + 'px ',
                fontSize: 0.09 * this.props.height +'px',
                top: (this.props.vh - this.props.height)*1/3,
                left: (this.props.vw - 1.8*this.props.height)/2,
                border-radius: 6px;
                border: 1px solid rgba(0,0,0,.6);
                box-shadow: rgba(88, 86, 86, 0.721569) 4px 5px 5px -1px;
            },
            heading: {
                height: 0.15 * this.props.height + 'px',
                marginBottom: 0.04 * this.props.height + 'px',
            },
            label: {
                paddingTop: 0.04*this.props.height,
            },
            close: {
                fontSize: 0.14 * this.props.height +'px',
            },
            footer: {
                height: 0.15 * this.props.height +'px',
            },
            formDiv: {
                height: 0.9 * this.props.height + 'px',
            },
            input: {
                height: '9px',
                width: '9px',
            }

        };
        return ds;
    }




    render() {
        console.log('render');
        dyn = this.dynamicStyles()
        if (this.state.cycle==='exit') {
            // set null in DOM
            return null;
        }
        return (
            <div parent style={[styles.parent, dyn.parent]}>
                <div heading style={[styles.heading, dyn.heading]}>
                    <h4 header style={[styles.header, dyn.header]}>Settings</h4>
                    <button close style={[styles.close, dyn.close]} type="button" onClick={this.handleExit}>&times;</button>
                </div>


                <div  style={[dyn.formDiv]}>
                    <form>
                        <label style={[styles.label, dyn.label]}>Show opponents point count and distribution
                        <input style={[styles.input, dyn.input]} type="checkbox" name="showOppPointCount" ref="showOppPointCount"
                         checked={this.state.showPointCount} onChange={this.updateState} /></label>

                        <label style={[styles.label, dyn.label]}>Show opponents cards
                        <input style={[styles.input, dyn.input]} type="checkbox" name="showOppCardFace" ref="showOppCardFace"
                        checked={this.state.showOppCardFace} onChange={this.updateState} /></label>

                        <label style={[styles.label, dyn.label]}>Show partners cards
                        <input style={[styles.input, dyn.input]} type="checkbox" name="showPartnersCardFace" ref="showPartnersCardFace"
                         checked={this.state.showPartnersCardFace} onChange={this.updateState} /></label>

                         <label style={[styles.label, dyn.label]}>Show partners point count and distribution
                         <input style={[styles.input, dyn.input]}type="checkbox" name="showPartnersPointCount" ref="showPartnersPointCount"
                          checked={this.state.showPartnersCount} onChange={this.updateState} /></label>

                        <label style={[styles.label, dyn.label]}>Show own point count and distribution
                        <input style={[styles.input, dyn.input]} type="checkbox" name="showOwnPointCount" ref="showOwnPointCount"
                        checked={this.state.showOwnPointCount} onChange={this.updateState} /></label>
                    </form>
                </div>
                <div footer="1" style={[dyn.footer]}></div>
            </div>
        );
    }
}

SettingsForm = Radium(SettingsForm);






// modal.style.display = "block";
// modal.style.display = "none";
