import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import Radium from 'radium'

export { Layout }

const styles = {}
styles.base = {
    margin: '0',
    paddding: '0',
    boxSizing: 'border-box',
}

const dimensions = {
    navHeightFactor: 0.15,              // height of 'nav'
    rhsWidthFactor: 0.275,              // width of 'rhs'
    ccWidthFactor: 0.55,
}

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    dynamicStyles() {
        var navHeight = dimensions.navHeightFactor * this.props.vh;
        var rhsWidth = dimensions.rhsWidthFactor * this.props.vw;
        var mainWidth = this.props.vw - rhsWidth;
        var mainHeight = this.props.vh - navHeight;
        if (dimensions.ccWidthFactor >= mainHeight/mainWidth) {
            console.log('dimensions.ccWidthFactor is wrong');
        }
        var leftMainWidth = mainWidth * (1 - dimensions.ccWidthFactor)/2;
        var lnHeight = (mainHeight - dimensions.ccWidthFactor * mainWidth)/2
        var centerMainWidth = mainWidth - 2 * leftMainWidth;
        var ccHeight = mainHeight - 2 * leftMainWidth;

        // nav panel
        styles.nav = {
            height: navHeight,
            backgroundColor: 'blue'
        }
        // main panel
        styles.main = {
            float: 'left',
            height: mainHeight,
            width: mainWidth,
            backgroundColor: 'gray'
        }
        // right panel
        styles.rhs = {
            float: 'right',
            height: mainHeight,
            width: rhsWidth,
            backgroundColor: 'red'
        }
        // main-left-column
        styles.leftMain = {
            float: 'left',
            height: mainHeight,
            width: leftMainWidth,
            backgroundColor: 'gray'
        }
        // main-center-column
        styles.centerMain = {
            float: 'left',
            height: mainHeight,
            width: centerMainWidth,
            backgroundColor: 'white',
        }
        // main-right-column
        styles.rightMain = {
            float: 'left',
            height: mainHeight,
            width: leftMainWidth,
            backgroundColor: 'gray'
        }

        // main-left-column block
        styles.ln = {
            height: lnHeight,
            backgroundColor: 'green'
        }
        styles.lc = {
            height: centerMainWidth,
            backgroundColor: 'black',
        }
        styles.ls = {
            height: lnHeight,
            backgroundColor: 'green',
        }
        // end main-left-column block

        // main-center-column block
        styles.cn = {
            height: leftMainWidth,
            backgroundColor: 'yellow'
        }
        styles.cc = {
            height: ccHeight,
            backgroundColor: 'blue',
        }
        styles.cs = {
            height: leftMainWidth,
            backgroundColor: 'yellow',
        }
        // end main-center-column block

        // main-right-column block
        styles.ln = {
            height: lnHeight,
            backgroundColor: 'black'
        }
        styles.lc = {
            height: centerMainWidth,
            backgroundColor: 'green',
        }
        styles.ls = {
            height: lnHeight,
            backgroundColor: 'black',
        }
        // end main-right-column block


        styles.centerAll = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }

        // global update, used to dimension other components
        globalDimensions.handHeight = leftMainWidth;
    }


    render() {
        console.log('Layout');
        this.dynamicStyles();
        return (
            <div style={[styles.base]}>
                <div id="nav" style={[styles.base, styles.nav]}>
                    <p>{this.props.vw}</p>
                    <p>{styles.rhs.width}</p>
                    <p>{styles.main.width}</p>
                </div>
                <div id="main" style={[styles.base, styles.main]}>
                    <div id="mainleft" style={[styles.base, styles.leftMain]}>
                        <div id="ln" style={[styles.base, styles.ln]}>
                        </div>
                        <div id="lc" style={[styles.base, styles.lc, styles.centerAll]}>
                        </div>
                        <div id="ls" style={[styles.base, styles.ls]}>
                        </div>
                    </div>
                    <div id="maincenter" style={[styles.base, styles.centerMain]}>
                        <div id="cn" style={[styles.base, styles.cn, styles.centerAll]}>
                        </div>
                        <div id="cc" style={[styles.base, styles.cc]}>
                        </div>
                        <div id="cs" style={[styles.base, styles.cs]}>
                        </div>
                    </div>
                    <div id="mainright" style={[styles.base, styles.rightMain]}>
                        <div id="rn" style={[styles.base, styles.ln]}>
                        </div>
                        <div id="rc" style={[styles.base, styles.lc, styles.centerAll]}>
                        </div>
                        <div id="rs" style={[styles.base, styles.ls, styles.centerAll]}>
                        </div>
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
