import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import Radium from 'radium'

export { Layout }

const styles = {}
styles.base = {
    margin: '0',
    paddding: '0',
}

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    dynamicStyles() {
        var dimensions = {}
        dimensions.navHeight = 0.15;
        dimensions.rhsWidth = 0.3;
        dimensions.lnHeight = 0.2;              // of main height
        dimensions.lnWidth = 0.2;               // of main width

        var mainHeight = this.props.vh*(1-dimensions.navHeight);
        var mainWidth = this.props.vw*(1-dimensions.rhsWidth);
        var lnHeight = mainHeight*dimensions.lnHeight;
        var lnWidth = dimensions.lnWidth * mainWidth;

        styles.nav = {
            height: this.props.vh*dimensions.navHeight,
            backgroundColor: 'blue'
        }
        styles.main = {
            float: 'left',
            height: mainHeight,
            width: mainWidth,
            backgroundColor: 'yellow'
        }
        styles.rhs = {
            float: 'right',
            height: mainHeight,
            width: this.props.vw*(dimensions.rhsWidth),
            backgroundColor: 'green'
        }
        // north row
        styles.ln = {
            float: 'left',
            height: lnHeight,
            width: lnWidth,
            backgroundColor: 'red'
        }
        styles.cn = {
            float: 'left',
            height: lnHeight,
            width: mainWidth - 2*lnWidth,
            backgroundColor: 'purple'
        }
        styles.rn = {
            float: 'left',
            height: lnHeight,
            width: lnWidth,
            backgroundColor: 'black'
        }
        // end north row
        // center row
        styles.lc = {
            float: 'left',
            height: mainHeight - 2*lnHeight,
            width: lnWidth,
            backgroundColor: 'brown'
        }
        styles.cc = {
            float: 'left',
            height: mainHeight - 2*lnHeight,
            width: mainWidth - 2*lnWidth,
            backgroundColor: 'indigo'
        }
        styles.rc = {
            float: 'left',
            height: mainHeight - 2*lnHeight,
            width: lnWidth,
            backgroundColor: 'lightblue'
        }
        // end center row
        // south row
        styles.ls = {
            float: 'left',
            height: lnHeight,
            width: lnWidth,
            backgroundColor: 'red'
        }
        styles.cs = {
            float: 'left',
            height: lnHeight,
            width: mainWidth - 2*lnWidth,
            backgroundColor: 'purple'
        }
        styles.rs = {
            float: 'left',
            height: lnHeight,
            width: lnWidth,
            backgroundColor: 'black'
        }
        // end south row

    }


    render() {
        return (
            <div>
                <div id="nav" style={[styles.base, styles.nav]}></div>
                <div id="main" style={[styles.base, styles.main]}>
                    <div>
                        <div id="ln" style={[styles.base, styles.ln]}></div>
                        <div id="cn" style={[styles.base, styles.cn]}></div>
                        <div id="rn" style={[styles.base, styles.rn]}></div>
                    </div>
                    <div>
                        <div id="lc" style={[styles.base, styles.lc]}></div>
                        <div id="cc" style={[styles.base, styles.cc]}></div>
                        <div id="rc" style={[styles.base, styles.rc]}></div>
                    </div>
                    <div>
                        <div id="ls" style={[styles.base, styles.ls]}></div>
                        <div id="cs" style={[styles.base, styles.cs]}></div>
                        <div id="rs" style={[styles.base, styles.rs]}></div>
                    </div>
                </div>
                <div id="rhs" style={[styles.base, styles.rhs]}></div>
            </div>
        );
    }
}

Layout = Radium(Layout);
Layout.propTypes = {
    vh: PropTypes.number.isRequired,      // viewport height
    vw: PropTypes.number.isRequired,      // viewport width
};
